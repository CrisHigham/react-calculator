import PropTypes from 'prop-types';
import {useContext} from "react";
import {DisplayDispatchContext, OperatorFlagActionContext, OperatorFlagContext} from "./CalculatorProvider.jsx";

const buttonStyle = {
    number: 'bg-slate-300 hover:bg-slate-400',
    clear: 'bg-red-400 hover:bg-red-500',
    equal: 'bg-amber-400 hover:bg-amber-500',
    operator: 'bg-teal-400 hover:bg-teal-500',
}

const Button = (props) => {
    const dispatch = useContext(DisplayDispatchContext);
    const operatorFlag = useContext(OperatorFlagContext);
    const operatorFlagAction = useContext(OperatorFlagActionContext);

    function handleClick(buttonText){
        if ((props.style == "equal")){
            operatorFlagAction({
                value: true,
            });
        } else if(operatorFlag == true) {
            operatorFlagAction({
                value: false,
            });
        }

        dispatch({
            type: props.style,
            value: buttonText,
            flag: operatorFlag,
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
    style: "number",
    additionalClasses: "",
};

export default Button
