import cn from "classnames";
import classes from './headerH.module.scss';

const HeaderH = (props) => {

  switch (props.h) {
    case 'h1':
      return <h1 className={cn(classes.headerH1, props.clazz)}>{props.children}</h1>
      break;
    case 'h2':
      return <h2 className={cn(classes.headerH2, props.clazz)}>{props.children}</h2>
      break;
    case 'h3':
      return <h3 className={cn(classes.headerH3, props.clazz)}>{props.children}</h3>
      break;
    default:
      break;
  }

}

export default HeaderH;