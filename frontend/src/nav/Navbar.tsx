import { Link } from "react-router-dom";
import Container from "../components/layout/Container/Container";
import Socials from "../features/socials/Socials";
import { ABOUT_PATH, HOME_PATH } from "../constants";

export default function Navbar() {
  return (
    <Container>
      <div className="flex w-full items-center justify-between pt-8">
        <div className="flex gap-4">
          <Link className="btn" to={HOME_PATH}>
            Home
          </Link>
          <Link className="btn" to={ABOUT_PATH}>
            About me
          </Link>
        </div>
        <Socials />
      </div>
    </Container>
  );
}
