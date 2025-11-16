import LinkedinSVG from "../../assets/icons/linkedin.svg?react";
import GithubSVG from "../../assets/icons/github.svg?react";
import { Link } from "react-router-dom";

export default function Socials() {
  return (
    <div className="flex gap-4">
      <Link
        title="Linkedin"
        to="https://www.linkedin.com/in/andrea-napoletano-43923b275/"
      >
        <LinkedinSVG />
      </Link>
      <Link title="Github" to="https://github.com/NapoletanoAndrea">
        <GithubSVG />
      </Link>
    </div>
  );
}
