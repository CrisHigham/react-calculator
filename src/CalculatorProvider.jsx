import { createContext, useReducer} from 'react';
import PropTypes from "prop-types";
import {evaluate} from "mathjs";

export const StateContext = createContext({display: '0', evaluationString: ''});
export const StateDispatchContext = createContext(null);

export function DisplayProvider({ children }) {
    const [state, dispatch] = useReducer(buttonReducer, {display: '0', evaluationString: ''});

    return (
        <StateContext.Provider value={state}>
            <StateDispatchContext.Provider value={dispatch}>
                        {children}
            </StateDispatchContext.Provider>
        </StateContext.Provider>
    );
}

DisplayProvider.propTypes = {
    children: PropTypes.array,
};

function buttonReducer(state, action) {

    switch(action.type){
        case 'number': {
            if(state.evaluationString == '0'){
                return {...state, display: action.value, evaluationString: action.value};
            } else {
                return {...state, display: state.evaluationString + action.value, evaluationString: state.evaluationString + action.value};
            }
        }
        case 'operator': {
            if(state.evaluationString == '0'){
                return {...state, display: state.display + action.value, evaluationString: state.display + action.value};
            } else {
                return {...state, display: state.evaluationString + action.value, evaluationString: state.evaluationString + action.value};
            }
        }
        case 'clear':{
            return {...state, display: '0', evaluationString: ''};
        }
        case 'equal':{
            try {
                let answer = evaluate(state.evaluationString);
                return {...state, display: answer, evaluationString: '0'};
            }
            catch(err) {
                return {...state, display: 'my chips are burning', evaluationString: ''};
            }
        }
        default: {
            return {...state, display: 'i have no idea', evaluationString: ''};
        }
    }
}