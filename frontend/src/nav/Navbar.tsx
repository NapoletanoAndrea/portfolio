import { Link, useLocation, type LinkProps } from "react-router-dom";
import Container from "../components/layout/Container/Container";
import Socials from "../features/socials/Socials";
import { ABOUT_PATH, HOME_PATH } from "../constants";

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
  return (
    <Container>
      <div className="flex w-full items-center justify-between pt-8">
        <div className="flex gap-4">
          <NavLink to={HOME_PATH}>Home</NavLink>
          <NavLink to={ABOUT_PATH}>About me</NavLink>
        </div>
        <Socials />
      </div>
    </Container>
  );
}
