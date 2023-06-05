import {useContext} from "react";
import {StateContext, StateDispatchContext} from "./CalculatorProvider.jsx";

function HistoryContent() {
    const state = useContext(StateContext);
    const dispatch = useContext(StateDispatchContext);
    const historyText = [...state.history];

    function handleClick(answer){
        dispatch({
            type: "number",
            value: answer,
        });
    }
    function clearHistory(){
        dispatch({
            type: "history",
            value: "0",
        })
    }
  return (
    <>
        <p>
            Click sum to use answer
            <button className="bg-slate-600 p-1 rounded hover:bg-slate-400 m-1 hover:text-black"
                onClick={()=>clearHistory()}>Clear History</button>
        </p>
        {
            historyText.reverse().map((value, index) => (
            <p className="hover:bg-amber-500 p-1 rounded hover:text-black hover:opacity-100" style={{ opacity: 1 - index * 0.1 }}
               onClick={()=>handleClick(value.split('=')[1])}>{value}</p>
        ))}
    </>
  )
}

export default HistoryContent;
