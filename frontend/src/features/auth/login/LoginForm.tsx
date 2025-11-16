import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../../constants";
import { getTokens } from "../api";
import Button from "../../../components/ui/Button/Button";
import Input from "../../../components/ui/Input/Input";

export default function LoginForm({ path = "/" }) {
  const { t } = useTranslation();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginMutation = useMutation({
    mutationFn: () => getTokens({ username, password }),
    onSuccess: (data) => {
      localStorage.setItem(ACCESS_TOKEN, data.access);
      localStorage.setItem(REFRESH_TOKEN, data.refresh);
      navigate(path);
    },
  });

  const navigate = useNavigate();

  const handleLogin = async (e: any) => {
    e.preventDefault();
    loginMutation.mutate();
  };

  return (
    <div className="">
      <form className="flex flex-col items-center gap-4">
        <h1 className="text-3xl font-bold">{t("welcome")}</h1>
        <Input
          className="w-80"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></Input>
        <Input
          className="w-80"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></Input>
        <Button
          type="submit"
          onClick={(e) => {
            handleLogin(e);
          }}
        >
          {t("auth.login")}
        </Button>
        <div>
          {t("auth.no_account") + " "}
          <Link to="/register" className="hover:underline">
            {t("auth.register") + " " + t("here")}
          </Link>
        </div>
      </form>
    </div>
  );
}
