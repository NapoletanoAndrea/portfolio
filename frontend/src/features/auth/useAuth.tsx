import { useEffect, useRef, useState } from "react";
import { ACCESS_TOKEN } from "../../constants";
import { refreshAccessToken } from "./api";
import { useQuery } from "@tanstack/react-query";
import { jwtDecode } from "jwt-decode";

export const useAuth = () => {
  const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null);
  const hasAuthorized = useRef<boolean>(false);

  const refreshTokenQuery = useQuery({
    queryKey: ["refresh"],
    queryFn: () => refreshAccessToken(),
    enabled: false,
  });

  const authorize = () => {
    setIsAuthorized(true);
    hasAuthorized.current = true;
  };

  const unauthorize = () => {
    setIsAuthorized(false);
    hasAuthorized.current = false;
  };

  useEffect(() => {
    auth()
      .catch(() => unauthorize())
      .finally(() => {
        if (!hasAuthorized.current) {
          unauthorize();
        }
      });
  }, []);

  const refreshToken = async () => {
    const result = await refreshTokenQuery.refetch();
    if (result.isSuccess) {
      localStorage.setItem(ACCESS_TOKEN, result.data.access);
      authorize();
      return;
    }
    unauthorize();
  };

  const auth = async () => {
    const token = localStorage.getItem(ACCESS_TOKEN);

    if (!token) {
      unauthorize();
      return;
    }

    const tokenExpiration = jwtDecode(token).exp;
    const now = Date.now() / 1000;

    if ((tokenExpiration as number) < now) {
      await refreshToken();
    } else {
      authorize();
    }
  };

  return [isAuthorized];
};
