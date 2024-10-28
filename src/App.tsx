import "./App.css";
import { LinkButton } from "./component/link-button";

function App() {
  return (
    <>
      <h3>Visit my Social medias</h3>
      <LinkButton
        url={"https://www.linkedin.com/notifications/?filter=all"}
        name={"Linkedin"}
      />
      <LinkButton
        url={"https://www.linkedin.com/notifications/?filter=all"}
        name={"GitHub"}
      />
    </>
  );
}

export default App;
