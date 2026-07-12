import "./App.css";
import PrimaryButton from "./components/buttons/PrimaryButton";

function App() {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <PrimaryButton
        text="Start a Book"
        type="accent"
        hoverTransition={true}
        onClick={() => alert("Jhulo mere neeche")}
      />
    </div>
  );
}

export default App;
