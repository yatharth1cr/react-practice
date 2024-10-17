import "./App.css";
import Addtodo from "./components/Addtodo";
import Header from "./components/Header";
import Todoitem from "./components/Todoitem";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-container">
        <Addtodo />
        <Todoitem />
        <Todoitem />
      </div>
    </div>
  );
}

export default App;
