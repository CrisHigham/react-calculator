import PropTypes from 'prop-types';
import {useReducer, useEffect} from "react";

const buttonStyle = {
    normal: 'bg-slate-300 hover:bg-slate-400',
    clear: 'bg-red-400 hover:bg-red-500',
    equal: 'bg-amber-400 hover:bg-amber-500',
    operator: 'bg-teal-400 hover:bg-teal-500',
}

function buttonReducer(display, action) {
    switch(action.type){
        case 'number':{
            return action.value;
        }
    }
}

const Button = (props) => {

    const [display, dispatch] = useReducer(buttonReducer, '');

    useEffect(() => {
        console.log('display:', display);
    }, [display]);

    function handleClick(buttonText){
        dispatch({
            type: 'number',
            value: buttonText,
        });
    }



  return (
      <button className={`flex flex-col justify-center text-center py-2 rounded-md h-full w-full font-mono ${buttonStyle[props.style]} ${props.additionalClasses}`}>
          <div onClick={()=>handleClick(props.text)}>{props.text}</div>
      </button>
  )
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    style: PropTypes.string,
    additionalClasses: PropTypes.string,
};

Button.defaultProps = {
    style: "normal",
    additionalClasses: "",
};

export default Button
