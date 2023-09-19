import classes from './success.module.scss';
import cn from 'classnames';

const Success = ({setSignIn, message}) => {
  return (
    <div className={classes.success}>
      <button onClick={() => setSignIn(false)} className={classes.close}>&times;</button>
      <div className={cn(classes.message, {[classes.error]: message !== 'success'})}>
        {message === 'success' ? 'Ваше замовлення успішно доставлено!' : "Виникла помилка!"}
      </div>
    </div>
  )
} 

export default Success;