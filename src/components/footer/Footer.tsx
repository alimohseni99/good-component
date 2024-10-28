import { LinkButton } from "../link-button/link-button";
import "./style.css";
export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-buttons">
          <h3>Visit My Links</h3>

          <LinkButton
            url={"https://www.linkedin.com/notifications/?filter=all"}
            name={"Linkedin"}
          />
          <LinkButton
            url={"https://www.linkedin.com/notifications/?filter=all"}
            name={"GitHub"}
          />
          <LinkButton url={"facebook.com"} name={"Facebook"} />
        </div>
      </footer>
    </>
  );
}
