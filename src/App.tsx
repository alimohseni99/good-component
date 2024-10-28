import "./App.css";
import { LinkButton } from "./component/link-button";

function App() {
  return (
    <>
      <h3>Visit My Links</h3>
      <div className="buttons">
        <LinkButton
          url={"https://www.linkedin.com/notifications/?filter=all"}
          name={"Linkedin"}
        />
        <LinkButton
          url={"https://www.linkedin.com/notifications/?filter=all"}
          name={"GitHub"}
        />
      </div>
    </>
  );
}

export default App;
