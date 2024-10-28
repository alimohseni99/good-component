import { SiLinkedin, SiGithub } from "react-icons/si";
import { RxAvatar } from "react-icons/rx";
import "./link-button.css";

type SocialMedia = "Linkedin" | "GitHub";
type LinkProps = {
  url: string;
  name: SocialMedia;
};

export const LinkButton = ({ url, name }: LinkProps) => {
  let Icon = RxAvatar;

  if (name === "Linkedin") {
    Icon = SiLinkedin;
  } else if (name === "GitHub") {
    Icon = SiGithub;
  }

  return (
    <div>
      <button>
        <a href={url} target="_blank" className="link-button">
          {name}
          <Icon style={{ marginLeft: "9px" }} />
        </a>
      </button>
    </div>
  );
};
