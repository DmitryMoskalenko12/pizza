import Card from "../card/card";
import classes from './card-list.module.scss';

const CardList = (props) => {
  return (
    <div className={classes.cardContainer}>
      {
        props.data.map(({path, titleName, descr, price, id}) => {
          return <Card key={id} path={path} titleName={titleName} descr={descr} price={price}/>
        })
      }
    </div>
  )
}

export default CardList;