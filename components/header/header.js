import Button from "@/ui/button/button";
import Logo from "@/ui/logo/logo";
import Image from "next/image";
import Telefon from "@/ui/telefon/telefon";
import Link from "next/link";
import cn from "classnames";
import classes from './header.module.scss';
import { useState, useEffect } from "react";
import { navDataLink } from "@/dummy-data/dummy-data";
import HeaderBasket from "../headerBasket/headerBasket";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const Header = (props) => {
  const [activeSideMenu, setActiveSideMenu] = useState(false);
  const [showBasketHeader, setShowBasketHeader] = useState(false);
  const [showBasketHeader2, setShowBasketHeader2] = useState(false);
  const pathName = useRouter().pathname;
  const basketData = useSelector(state => state.basket.basketArr);

  useEffect(() => {
   if ((window.screen.availWidth <= 992) && (pathName === '/basketPage')) {
    localStorage.setItem('basketHeader', true)
    setShowBasketHeader(localStorage.getItem('basketHeader'))
   } else {
    localStorage.removeItem('basketHeader');
    setShowBasketHeader(false)
   }

   if ((window.screen.availWidth > 992) && (pathName === '/basketPage')) {
    localStorage.setItem('basketHeader', true)
    setShowBasketHeader(localStorage.getItem('basketHeader'))
    setShowBasketHeader2(true)
   }
  },[showBasketHeader, pathName])

  const onSideMenuActive = () => {
    setActiveSideMenu(active => !active)
  }

  const onSideMenuClose = () => {
    setActiveSideMenu(false)
  }

  return (
    <header className={classes.header}>
      <div className="container">
       {showBasketHeader && showBasketHeader2 ? null : <div className={classes.wrapper}>
        <div className={classes.headerTop}>
          <Logo clazz={classes.logo} src={'/images/logo.webp'} width={90} height={45} alt={'You will see logo'}/>

          <div className={classes.deliveryHeaderUp}>
             <div className={classes.deliveryPasta}>Доставка пасти <span className={classes.townDelivery}>Миколаїв</span></div>

             <div className={classes.topTimeBlock}>
                <div className={classes.topTimeSubBlock}>
                  <Image className={classes.img} src={'/images/spiral.webp'} alt="You will see spiral" width={18} height={18}/>
                  <span className={classes.food}>Миколаїв їжа</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4" fill="none">
                  <circle cx="2" cy="2" r="2" fill="#FF2E65"/>
                  </svg>
                  <span className={classes.rating}>4.8</span>
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 5.05469C13 4.82031 12.75 4.72656 12.5625 4.69531L8.64062 4.125L6.88281 0.570312C6.8125 0.421875 6.67969 0.25 6.5 0.25C6.32031 0.25 6.1875 0.421875 6.11719 0.570312L4.35938 4.125L0.4375 4.69531C0.242188 4.72656 0 4.82031 0 5.05469C0 5.19531 0.101563 5.32812 0.195313 5.42969L3.03906 8.19531L2.36719 12.1016C2.35938 12.1563 2.35156 12.2031 2.35156 12.2578C2.35156 12.4609 2.45313 12.6484 2.67969 12.6484C2.78906 12.6484 2.89063 12.6094 2.99219 12.5547L6.5 10.7109L10.0078 12.5547C10.1016 12.6094 10.2109 12.6484 10.3203 12.6484C10.5469 12.6484 10.6406 12.4609 10.6406 12.2578C10.6406 12.2031 10.6406 12.1563 10.6328 12.1016L9.96094 8.19531L12.7969 5.42969C12.8984 5.32812 13 5.19531 13 5.05469Z" fill="#FFC816"/>
                  </svg>
                </div>

                <div className={classes.timeDeliveryBlock}>
                  <span className={classes.timeDelivery}>Час доставки</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4" fill="none">
                  <circle cx="2" cy="2" r="2" fill="#FF2E65"/>
                  </svg>
                  <span className={classes.time}>від 31 хв</span>
                </div>
             </div>
          </div>

          <Button clazz={classes.button}>Замовити дзвінок</Button>
          <Telefon clazz={classes.phone}>38 099 611 76 93</Telefon>
          <Link href={'/basketPage'} className={classes.basket}>
            <span>Кошик</span>
            <span>|</span>
            <span>{basketData.length}</span>
          </Link>

          <div onClick={onSideMenuActive} className={cn(classes.burger, {[classes.burgerActive]: activeSideMenu})}>
              <div></div>
              <div></div>
              <div></div>
          </div>

        </div>

        <div className={cn(classes.headerBottom, {[classes.headerBottomActive]: activeSideMenu})}>
          <div className={classes.logoClose}>
           <Logo clazz={classes.navLogo} src={'/images/logo.webp'} width={90} height={45} alt={'You will see logo'}/>
           <svg onClick={onSideMenuClose} className={classes.close} xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none">
              <rect x="0.121094" y="28" width="39" height="3" rx="1.5" transform="rotate(-45 0.121094 28)" fill="#686466"/>
              <rect x="2.12109" width="39" height="3" rx="1.5" transform="rotate(45 2.12109 0)" fill="#686466"/>
           </svg>
          </div>

           <nav className={classes.navMenu}>
             <ul className={classes.navList}>
                {
                 navDataLink.map(({content, href, id}) => {
                    return <li key={id}><Link className={cn(classes.navLink, {[classes.first]: id === 1})} href={href}>{content}</Link></li>
                  })
                }
             </ul>
           </nav>

           <Link className={classes.signIn} href={'/'}>Увійти</Link>
           <Telefon clazz={classes.phone2}>38 099 611 76 93</Telefon>
           <Link href={'/basketPage'} className={classes.basket2}>
              <span>Кошик</span>
              <span>|</span>
              <span>{basketData.length}</span>
           </Link>
        </div>
       </div>}
      </div>  
      {
        showBasketHeader ? <HeaderBasket/> : null
      } 
    </header>
  )
}

export default Header;