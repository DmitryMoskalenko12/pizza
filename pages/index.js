import MainSlider from "@/components/main-slider/main-slider"
import NewProduct from "@/components/new-product-slider/new-product-slider";
import Pasta1 from "@/components/pasta1/pasta1";
import Pizza1 from "@/components/pizza1/pizza1";
import Gamburgers from "@/components/gamburgers/gamburgers";
import Stock from "@/components/stock/stock";
import DeliveryPayment from "@/components/deliveryPayment/delivery-payment";

export default function Home() {
  return (
    <>
     <MainSlider/>
     <NewProduct/>
     <Pasta1/>
     <Pizza1/>
     <Gamburgers/>
     <Stock/>
     <DeliveryPayment/>
    </>
  )
}
