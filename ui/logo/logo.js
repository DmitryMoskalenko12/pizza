import Image from "next/image"
import cn from "classnames";
import Link from "next/link";
import classes from './logo.module.scss';

const Logo = (props) => {
  return (
    <Link href={'/'}>
     <Image className={cn(classes.logo, props.clazz)} src={props.src} width={props.width} height={props.height} alt={props.alt}/>
    </Link>
  )
}

export default Logo;