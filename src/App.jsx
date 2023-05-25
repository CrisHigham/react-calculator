import Display from "./Display.jsx";
import Keypad from "./Keypad.jsx";
import {DisplayProvider} from "./CalculatorProvider.jsx";

function App() {

  return (
    <>
        <DisplayProvider>
            <div className="container max-w-xs mx-auto font-mono">
                <div className="bg-slate-600 max-w-xl rounded p-1 m-4">
                    <div className="m-4">
                        <Display />
                        <Keypad />
                    </div>
                </div>
            </div>
        </DisplayProvider>
    </>
  )
}

export default App
