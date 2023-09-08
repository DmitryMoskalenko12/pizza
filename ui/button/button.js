import cn from "classnames";
import classes from './button.module.scss'
import { useSelector } from "react-redux";

const Button = (props) => {
  const basketData= useSelector(state => state.basket.basketArr);

  return (
    <button disabled={basketData.find(item => item.id === props.id)} onClick={() => props.getProduct?.(props.id)} className={cn(classes.button, props.clazz)} >
      {
        props.children
      }
    </button>
  )
}

export default Button;