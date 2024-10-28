import { SiLinkedin, SiGithub } from "react-icons/si";
type SocialMedia = "Linkedin" | "GitHub";

type LinkProps = {
  url: string;
  name: SocialMedia;
};

export const LinkButton = ({ url, name }: LinkProps) => {
  let Icon = null;

  if (name === "Linkedin") {
    Icon = SiLinkedin;
  } else if (name === "GitHub") {
    Icon = SiGithub;
  } else {
    console.log("Unkown name");
    return null;
  }

  return (
    <div>
      <button className="link-button">
        <a href={url}>
          {name}
          {Icon && <Icon style={{ marginLeft: "8px" }} />}
        </a>
      </button>
    </div>
  );
};
