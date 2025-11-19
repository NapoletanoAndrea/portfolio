import { Link, useLocation, type LinkProps } from "react-router-dom";
import Container from "../components/layout/Container/Container";
import Socials from "../features/socials/Socials";
import { ABOUT_PATH, HOME_PATH } from "../constants";
import { Sun } from "lucide-react";
import { useTheme } from "../features/theme/useTheme";
import { useTranslation } from "react-i18next";

const NavLink = ({ to, className, ...props }: LinkProps) => {
  const { pathname } = useLocation();

  return (
    <Link
      to={to}
      className={`btn ${pathname === to && "selected"} ${className}`}
      {...props}
    ></Link>
  );
};

export default function Navbar() {
  const { switchToOppositeTheme } = useTheme();
  const { i18n } = useTranslation();

  return (
    <Container className="flex flex-col my-8">
      <div className="flex w-full items-center justify-between">
        <div className="flex gap-4">
          <NavLink to={HOME_PATH}>Home</NavLink>
          <NavLink to={ABOUT_PATH}>About me</NavLink>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden gap-4 sm:flex">
            <button
              className="cursor-pointer"
              onClick={() => switchToOppositeTheme()}
            >
              <Sun className="text-2xl font-bold" />
            </button>
            <button
              className="mr-4 cursor-pointer text-2xl font-bold"
              onClick={() =>
                i18n.changeLanguage(i18n.language === "en" ? "it" : "en")
              }
            >
              <span className="icon-hover">{i18n.language.toUpperCase()}</span>
            </button>
          </div>
          <Socials />
        </div>
      </div>
      <div className="flex gap-4 sm:hidden self-end mt-4">
        <button
          className="cursor-pointer"
          onClick={() => switchToOppositeTheme()}
        >
          <Sun className="text-2xl font-bold" />
        </button>
        <button
          className="cursor-pointer text-2xl font-bold"
          onClick={() =>
            i18n.changeLanguage(i18n.language === "en" ? "it" : "en")
          }
        >
          <span className="icon-hover">{i18n.language.toUpperCase()}</span>
        </button>
      </div>
    </Container>
  );
}
