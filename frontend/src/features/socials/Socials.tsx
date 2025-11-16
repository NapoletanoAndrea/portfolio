import LinkedinSVG from "../../assets/icons/linkedin.svg?react";
import GithubSVG from "../../assets/icons/github.svg?react";
import { Link } from "react-router-dom";

export default function Socials() {
  return (
    <div className="flex gap-4">
      <Link
        title="Linkedin"
        to="https://www.linkedin.com/in/andrea-napoletano-43923b275/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedinSVG />
      </Link>
      <Link
        title="Github"
        to="https://github.com/NapoletanoAndrea"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GithubSVG />
      </Link>
    </div>
  );
}
