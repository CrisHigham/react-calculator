import {useContext, useEffect, useRef} from 'react';
import {StateContext} from "./CalculatorProvider.jsx";

function Display() {
    const state = useContext(StateContext);
    const textareaRef = useRef(null);

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto';
            textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
        }
    }, [state.display]);

      return (
        <>
              <textarea
                  ref={textareaRef}
                  className="resize-none overflow-hidden h-auto bg-slate-400 my-2 rounded p-2 text-right block w-full"
                  value={state.display}
                  disabled
                  onChange={()=>{}}></textarea>
        </>
      )
}

export default Display;
