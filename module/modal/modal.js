import classes from './modal.module.scss';

const Modal = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>
        {
         props.children
        }
      </div>
    </div>
  )
}

export default Modal;