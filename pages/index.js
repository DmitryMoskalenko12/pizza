import Header from "@/components/header/header"
import { navDataLink } from "@/dummy-data/dummy-data";

export default function Home(props) {
  return (
    <>
     <Header data = {props.dataLink}/>
    </>
  )
}

export function getStaticProps() {
  
 return {
  props: {
    dataLink: navDataLink
  }
}

}