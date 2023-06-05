import { createContext, useReducer, useEffect} from 'react';
import PropTypes from "prop-types";
import {evaluate} from "mathjs";

export const StateContext = createContext({display: '0', evaluationString: ''});
export const StateDispatchContext = createContext(null);

export function DisplayProvider({ children }) {

    const [state, dispatch] = useReducer(buttonReducer, {display: '0', evaluationString: '', history: []});
    // Handling keyboard strokes
    const handleKey = (event) => {
        const keys = {"number": ['0','1','2','3','4','5','6','7','8','9'],
                    "operator": ['+','-','/','*','%'],
                    "equal": ['=', 'Enter'],
                    "clear": ['Escape']};

        var keyStroke = event.key;
        //console.log(keyStroke);
        for (const [key, value] of Object.entries(keys)){
            if(value.includes(keyStroke)){
                dispatch({
                    type: key,
                    value: event.key,
                });
            }
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKey);

        return () => {
            window.removeEventListener('keydown', handleKey);
        };
    }, []);

    return (
        <StateContext.Provider value={state}>
            <StateDispatchContext.Provider value={dispatch}>
                        {children}
            </StateDispatchContext.Provider>
        </StateContext.Provider>
    );
}

DisplayProvider.propTypes = {
    children: PropTypes.object,
};

function buttonReducer(state, action) {
    // const singlePressKeys = ['+', '-', '/', '*', '%', '.'];
    // var actionType = '';
    // if (!singlePressKeys.includes(action.value)){
    //     actionType ='do nothing';
    // } else {
        let actionType = action.type;
    // }
    switch(actionType){
        case 'do nothing': {
            return {...state};
        }
        case 'history': {
            return {...state, history: []};
        }
        case 'number': {
            if(state.evaluationString == '0' || state.evaluationString == 'Infinity'){
                return {...state, display: action.value, evaluationString: action.value};
            } else {
                return {...state, display: state.evaluationString + action.value, evaluationString: state.evaluationString + action.value};
            }
        }
        case 'operator': {
            if(state.evaluationString == '0' ){
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
                let historyEntry = state.evaluationString + '=' + answer;

                return {...state, display: answer, evaluationString: '0', history: [...state.history, historyEntry]};
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