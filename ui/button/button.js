import cn from "classnames";
import classes from './button.module.scss'

const Button = (props) => {
  return (
    <button className={cn(classes.button, props.clazz)} >
      {
        props.children
      }
    </button>
  )
}

export default Button;