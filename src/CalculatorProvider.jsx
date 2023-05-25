import { createContext, useReducer } from 'react';

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

function buttonReducer(display, action) {
    switch(action.type){
        case 'number':{
            return action.value;
        }
    }
}