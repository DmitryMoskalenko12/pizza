import { getSession } from "next-auth/react";
import Order from "@/components/order/order";

const OrderPage = () => {
  return (
    <>
     <Order/>
    </>
  )
}

export default OrderPage;

export async function getServerSideProps(context) {
  const session = await getSession({req: context.req});

  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {
      session
    }
  }
}