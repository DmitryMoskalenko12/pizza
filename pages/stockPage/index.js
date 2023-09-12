import StockSection from "@/components/stockSection/stockSection";
import { stockCardData } from "@/dummy-data/dummy-data";

const StockPage = ({stockData}) => {
  return (
    <>
    <StockSection data={stockData}/>
    </>
  )
  }

export default StockPage;

export function getStaticProps() {
  return {
    props: {
     stockData: stockCardData
    }
  }
}
