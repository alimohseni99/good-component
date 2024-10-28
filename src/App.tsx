import "./App.css";
import { LinkButton } from "./component/link-button";
import { SiLinkedin } from "react-icons/si";

function App() {
  return (
    <>
      <h3>Visit my Social medias</h3>
      <LinkButton
        url={"https://www.linkedin.com/notifications/?filter=all"}
        name={"Linkedin"}
        icon={SiLinkedin}
      />
    </>
  );
}

export default App;
