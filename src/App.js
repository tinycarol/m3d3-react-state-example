import "./App.css";
import ClickableButton from "./components/clickableButton/ClickableButton";
import CoolButton from "./components/coolButton/CoolButton";
import Counter from "./components/counter/Counter";

function App() {
  return (
    <div className="App">
      <ClickableButton onClick={() => alert("Clicked!")}>
        Click me!
      </ClickableButton>
      <Counter />
      <Counter />
      <CoolButton />
      <CoolButton />
      <CoolButton />
      <CoolButton />
      <CoolButton />
      <CoolButton />
    </div>
  );
}

export default App;
