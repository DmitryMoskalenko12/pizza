import classes from './gamburgers.module.scss';
import { useSelector } from 'react-redux';
import CardList from '@/module/card-list/card-list';
import HeaderH from '@/ui/headerH/headerH';

const Gamburgers = () => {
  const gamburgersData = useSelector(state => state.gamburgers.data);

  return (
    <section className={classes.gamburgers}>
      <div className="container">
        <div className={classes.wrapper}>
           <HeaderH h={'h2'} clazz={classes.h2}>Гамбургери</HeaderH>
           <CardList data={gamburgersData}/>
        </div>
      </div>
    </section>
  )
}

export default Gamburgers;