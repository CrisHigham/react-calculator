import { createPortal } from 'react-dom';
import Display from "./Display.jsx";
import Keypad from "./Keypad.jsx";
import HistoryContent from "./HistoryContent.jsx"
import {DisplayProvider} from "./CalculatorProvider.jsx";

function App() {
    const historyElement = document.getElementById('historyText');

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
            {createPortal(
                <HistoryContent />,
                historyElement
            )}
        </DisplayProvider>
    </>
  )
}

export default App
