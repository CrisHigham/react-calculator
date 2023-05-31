import PropTypes from 'prop-types';
import {useContext} from "react";
import {StateDispatchContext} from "./CalculatorProvider.jsx";

const buttonStyle = {
    number: 'bg-slate-300 hover:bg-slate-400',
    clear: 'bg-red-400 hover:bg-red-500',
    equal: 'bg-amber-400 hover:bg-amber-500',
    operator: 'bg-teal-400 hover:bg-teal-500',
}

const Button = (props) => {
    const dispatch = useContext(StateDispatchContext);

    function handleClick(buttonText){
        dispatch({
            type: props.style,
            value: buttonText,
        });
    }

  return (
      <button
          className={`flex flex-col justify-center items-center py-2 rounded-md h-full w-full font-mono ${buttonStyle[props.style]} ${props.additionalClasses}`}
          onClick={()=>handleClick(props.text)}>{props.text}</button>
  )
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    style: PropTypes.string,
    additionalClasses: PropTypes.string,
};

Button.defaultProps = {
    style: "number",
    additionalClasses: "",
};

export default Button
