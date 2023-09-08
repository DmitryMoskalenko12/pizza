import classes from './headerBasket.module.scss';
import Logo from '@/ui/logo/logo';
import cn from 'classnames';

const HeaderBasket = () => {
  const arrSteps = [
    {number: 1, nameStep: 'Кошик', id: 1},
    {number: 2, nameStep: 'Оформлення замовлення', id: 2},
    {number: 3, nameStep: 'Замовлення прийняте', id: 3},
  ]

  return (
    <div className={classes.headerBasket}>
      <div className="container">
        <div className={classes.wrapper}>
           <Logo clazz={classes.logo} src={'/images/logo.webp'} width={80} height={59} alt={'You will see logo'}/>
           <div className={classes.steps}>
            {
              arrSteps.map(({number, nameStep, id}) => {
                return <div key={id} className={classes.stepsBlock}>
                          <div className={cn(classes.stepsCircleBlock, {[classes.circleBlock3]: id === 3})}>
                            <div className={cn(classes.circle, {[classes.circleActive]: id === 1})}>{number}</div>
                          </div>
                          <div className={cn(classes.stepsTitle, {[classes.stepsTitleActive]: id === 1})}>{nameStep}</div>
                       </div>
              })
            }
           </div>
        </div>
      </div>
      <hr className={classes.hr}/>
    </div>
  )
}

export default HeaderBasket;