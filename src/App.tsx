import "./App.css";

import Button from "./components/Button/Button";

function App() {
  return (
    <div>
      <Button
        text="test"
        isArrow={true}
        btnType="secondary"
        onClickFunc={() => console.log("clicked")}
      />
    </div>
  );
}

export default App;
