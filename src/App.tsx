import "./App.css";
import GlobalStyles from "./GlobalStyles";

import Button from "./components/Button/Button";

function App() {
  return (
    <>
      <div>testing test</div>
      <Button
        text="test"
        isArrow={true}
        btnType="secondary"
        onClickFunc={() => console.log("clicked")}
      />
    </>
  );
}

export default App;
