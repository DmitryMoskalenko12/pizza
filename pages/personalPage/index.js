import Bonus from "@/module/bonus/bonus";
import BonusForm from "@/module/bonusForm/bonus-form";
import { getSession } from "next-auth/react";

const PersonalPage = () => {
  return (
    <>
    <Bonus/>
    <BonusForm/>
    </>
  )
}

export default PersonalPage;

export async function getServerSideProps(context) {
  const session = await getSession({req: context.req})

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