const HeaderH = (props) => {

  switch (props.h) {
    case 'h1':
      return <h1 className={props.classes}>{props.children}</h1>
      break;
    case 'h2':
      return <h2 className={props.classes}>{props.children}</h2>
      break;
    case 'h3':
      return <h3 className={props.classes}>{props.children}</h3>
      break;
    default:
      break;
  }

}

export default HeaderH;