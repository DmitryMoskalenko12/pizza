import Card from "../card/card";
import classes from './card-list.module.scss';

const CardList = ({data, getProduct}) => {
  return (
    <div className={classes.cardContainer}>
      {
        data.map(({path, titleName, descr, price, id}) => {
          return <Card key={id} id={id} path={path} getProduct={getProduct} titleName={titleName} descr={descr} price={price}/>
        })
      }
    </div>
  )
}

export default CardList;