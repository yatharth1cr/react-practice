import "./App.css";
import ClockHead from "./components/ClockHead";
import ClockSlogan from "./components/ClockSlogan";
import CurrentTime from "./components/CurrentTime";

function App() {
  return (
    <center>
      <ClockHead />
      <ClockSlogan />
      <CurrentTime />
    </center>
  );
}

export default App;
