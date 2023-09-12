import { stockCardData } from "@/dummy-data/dummy-data";
import classes from './single-page.module.scss';
import Image from "next/image";
import Head from "next/head";
import HeaderH from "@/ui/headerH/headerH";

const SingleStockPage = ({content}) => {
  return (
    <article className={classes.single}>
     <Image className={classes.img} src={content.path} width={300} height={138} alt="Stock"/>
     <HeaderH clazz={classes.h3} h={'h3'}>{content.title}</HeaderH>
     <div className={classes.descr}>{content.descr}</div>
    </article>
  )
}

export default SingleStockPage;

export function getStaticProps(context) {
  const id = context.params.id.toString();
  const stock = stockCardData.find(item => item.id.toString() === id);
  
  return {
    props: {
      content: stock,
      revalidate: 20000
    }
  }
}

export async function getStaticPaths() {
  const idArr = stockCardData.map(item => ({params: {id: item.id.toString()}}));

  return {
    paths: idArr,
    fallback: false
  }
}