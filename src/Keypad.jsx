import Button from "./Button.jsx";

function Keypad() {

  return (
    <>
      <div className="grid grid-cols-4 grid-flow-row gap-4 bg-blue-800 rounded p-2">
          <Button text = {"%"} style={"operator"}/>
          <Button text = {"/"} style={"operator"}/>
          <Button text = {"*"} style={"operator"}/>
          <Button text = {"-"} style={"operator"}/>
          <Button text = {"7"}/>
          <Button text = {"8"}/>
          <Button text = {"9"}/>
          <Button text = {"+"} style={"operator"} additionalClasses={"row-span-2"}/>
          <Button text = {"4"}/>
          <Button text = {"5"}/>
          <Button text = {"6"}/>
          <Button text = {"1"}/>
          <Button text = {"2"}/>
          <Button text = {"3"}/>
          <Button text={"="}  style={"equal"} additionalClasses={"row-span-2"}/>
          <Button text = {"C"} style={"clear"}/>
          <Button text = {"0"}/>
          <Button text = {"."}/>
      </div>
    </>
  )
}

export default Keypad
