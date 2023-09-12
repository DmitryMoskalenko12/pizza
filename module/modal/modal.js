import classes from './modal.module.scss';
import { Transition } from 'react-transition-group';

const Modal = (props) => {

const duration = 600;

const defaultStyle = {
  transition: `all ${duration}ms ease-in-out`,
  opacity: 0,
  visibility: 'hidden'
}

const transitionStyles = {
  entering: { opacity: 1, visibility: 'visible'},
  entered:  { opacity: 1, visibility: 'visible'},
  exiting:  { opacity: 0, visibility: 'hidden' },
  exited:  { opacity: 0, visibility: 'hidden' },
};

  return (
    <Transition in={props.modal} timeout={duration}>
      {
        state => (
        <div onClick={props.hideOverlay} data-modal className={classes.modal} style={{
          ...defaultStyle,
          ...transitionStyles[state]
        }}>
          <div onClick={props.hideOverlay} className={classes.content}>
            {
            props.children
            }
          </div>
        </div>
        )
      }
    </Transition>
  )
}

export default Modal;