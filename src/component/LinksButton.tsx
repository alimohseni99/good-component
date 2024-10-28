type LinkProps = {
  url: string;
  name: string;
};
export const LinksButton = ({ url, name }: LinkProps) => {
  return (
    <div>
      <a href={url}>{name}</a>
    </div>
  );
};
