import { useSelector } from "react-redux";
import StockList from "@/module/stockList/stockList";
import HeaderH from "@/ui/headerH/headerH";
import classes from './stockSection.module.scss';
import { useState } from "react";

const StockSection = ({data}) => {
  const [servData, setServData] = useState(data)
  const stockData = useSelector(state => state.stockDataCard.data);

  return (
    <section className={classes.stockSection}>
      <div className="container">
        <div className={classes.mainWrapper}>
         <HeaderH h={'h2'} clazz={classes.h2}>Акції</HeaderH>
         <StockList data={stockData}/>
        </div>
      </div>
      <picture>
        <source
          width={219}
          height={479}
          media="(min-width: 1440px)"
          srcSet="/images/man.webp"
        />
        <source
          width={71}
          height={128}
          media="(min-width: 768px)"
          srcSet="/images/man768.webp"
        />
        <source
          width={69}
          height={100}
          media="(min-width: 320px)"
          srcSet="/images/man.webp"
        />
        <img className={classes.manImg} src={'/images/man768.webp'} alt='You will see man' width={71} height={128}/>
      </picture>

      <picture>
        <source
          width={219}
          height={479}
          media="(min-width: 1440px)"
          srcSet="/images/girl2.webp"
        />
        <source
          width={71}
          height={128}
          media="(min-width: 768px)"
          srcSet="/images/girl768.webp"
        />
        <source
          width={69}
          height={100}
          media="(min-width: 320px)"
          srcSet="/images/girl2.webp"
        />
        <img className={classes.girlImg} src={'/images/girl768.webp'} alt='You will see girl' width={71} height={128}/>
      </picture>
   </section>
  )
}

  export default StockSection;