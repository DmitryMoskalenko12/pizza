import StockCard from "../stockCard/stockCard";
import classes from './stockList.module.scss';

const StockList = ({data}) => {
  return (
    <div className={classes.wrapper}>
      {
       data.map(({path, descr, id, title}) => {
        return <StockCard id={id} key={id} path={path} descr={descr} title={title}/>
       })
      }
    </div>
  )
}

export default StockList;