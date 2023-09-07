import classes from './map.module.scss';
import cn from 'classnames';

const Map = (props) => {
  return (
    <iframe className={cn(classes.map, props.clazz)} src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d59848.684482051336!2d31.964529475701312!3d46.97217153188883!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sua!4v1694000285645!5m2!1sru!2sua" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  )
}

export default Map;