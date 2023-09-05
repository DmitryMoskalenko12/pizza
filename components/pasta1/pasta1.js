import classes from './pasta1.module.scss';
import { useSelector } from 'react-redux';
import CardList from '@/module/card-list/card-list';
import HeaderH from '@/ui/headerH/headerH';

const Pasta1 = () => {
  const pasta1Data = useSelector(state => state.pasta1.data);

  return (
    <section className={classes.pasta1}>
      <div className="container">
        <div className={classes.wrapper}>
           <HeaderH h={'h2'} clazz={classes.h2}>Паста</HeaderH>
           <CardList data={pasta1Data}/>
        </div>
      </div>
    </section>
  )
}

export default Pasta1;