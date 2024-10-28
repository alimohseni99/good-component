type LinkProps = {
  url: string;
  name: string;
};
type SocialMedia = "Linkedin" | "GitHub";


export const LinkButton = ({ url, name }: LinkProps) => {
  return (
    <div>
      <button className="link-button">
        <a href={url}>{name}</a>
      </button>
    </div>
  );
};
