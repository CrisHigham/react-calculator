import {useContext} from 'react';
import {StateContext} from "./CalculatorProvider.jsx";

function Display() {
    const state = useContext(StateContext);
      return (
        <>
          <div className="bg-slate-400 my-2 rounded">
              <p className="p-2 text-right">{state.display}</p>
          </div>
        </>
      )
}

export default Display
