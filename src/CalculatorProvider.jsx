import { createContext, useReducer } from 'react';
import PropTypes from "prop-types";
import {evaluate} from "mathjs";

export const DisplayContext = createContext(1);
export const DisplayDispatchContext = createContext(null);

export function DisplayProvider({ children }) {
    const [display, dispatch] = useReducer(buttonReducer, '0');

    return (
        <DisplayContext.Provider value={display}>
            <DisplayDispatchContext.Provider value={dispatch}>
                {children}
            </DisplayDispatchContext.Provider>
        </DisplayContext.Provider>
    );
}

DisplayProvider.propTypes = {
    children: PropTypes.array,
};

function buttonReducer(display, action) {
    switch(action.type){
        case 'number': {
            if (display == '0'){
                return action.value;
            } else {
                return display + action.value;
            }
        }
        case 'clear':{
            return '0';
        }
        case 'operator':{
            return display + action.value;
        }
        case 'equal':{
            try {
                let answer = evaluate(display);
                return answer;
            }
            catch(err) {
                return 'my chips are burning';
            }
        }
        default: {
            return 'i have no idea';
        }
    }
}