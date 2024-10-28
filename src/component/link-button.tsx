import React from "react";
import type { IconType } from "react-icons";
type LinkProps = {
  url: string;
  name: string;
  icon: IconType;
};
export const LinkButton = ({ url, name, icon }: LinkProps) => {
  return (
    <div>
      <button className="link-button">
        <a href={url}>
          {name}
          {React.createElement(icon)}
        </a>
      </button>
    </div>
  );
};
