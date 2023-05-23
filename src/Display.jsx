import {useContext} from 'react';
import {DisplayContext} from "./DisplayContext.js";

function Display() {
    const display = useContext(DisplayContext);
      return (
        <>
          <div className="bg-slate-400 my-2 rounded">
              <p className="p-2 text-right">{display}</p>
          </div>
        </>
      )
}

export default Display
