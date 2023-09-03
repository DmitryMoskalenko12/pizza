import cn from "classnames";
import classes from './telefon.module.scss';

const Telefon = (props) => {
  return (
    <a className={cn(classes.phone, props.clazz)} href="tel:380996117693">{props.children}</a>
  )
}

export default Telefon;