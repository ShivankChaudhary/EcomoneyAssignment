import "./App.css";
import { useRoutes } from "react-router-dom";
import mainroutes from "./routes/mainRoutes";

function App() {
  const mainroutesElement = useRoutes(mainroutes);
  return <div className="wrapper">{mainroutesElement}</div>;
}

export default App;
