import classes from './footer.module.scss';
import Logo from '@/ui/logo/logo';
import Telefon from '@/ui/telefon/telefon';
import Button from '@/ui/button/button';
import HeaderH from '@/ui/headerH/headerH';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Modal from '@/module/modal/modal';
import CallOrder from '@/module/callOrder/call-order';

const Footer = () => {
  const [signIn, setSignIn] = useState(false);

  const hideOverlay = (e) => {
    if (e.target.getAttribute('data-modal')) {
      setSignIn(false)
    }
  }

  return (
    <footer className={classes.footer}>
      <div className="container">
       <div className={classes.wrapper}>
        <div className={classes.block1}>
            <div className={classes.contactLogo}>
              <Logo clazz={classes.logo} src={'/images/logo.webp'} width={80} height={60} alt={'You will see logo'}/>

              <div className={classes.phoneOrderBlock}>
                <Telefon clazz={classes.phone}>099 611 7693</Telefon>
                <Button setSignIn={setSignIn} clazz={classes.order}>Замовити дзвінок</Button>
              </div>
            </div>
            <ul className={classes.calLowList}>
              <li><a className={classes.link} href="#">Калорійність та склад</a></li>
              <li><a className={classes.link} href="#">Правова інформація</a></li>
            </ul>
            <div className={classes.socialBlock}>
              <HeaderH h={'h3'} clazz={classes.h3}>Ми у соцмережах</HeaderH>
              <div className={classes.socialWrapper}>
                  <ul className={classes.socialSubBlock}>
                    <li><Link className={classes.socialLink1} target='__blank' href="https://www.youtube.com/">YouTube</Link></li>
                    <li><Link className={classes.socialLink2} target='__blank' href="https://www.instagram.com/">Instagram</Link></li>
                  </ul>

                  <ul className={classes.socialSubBlock}>
                    <li><Link className={classes.socialLink} target='__blank' href="https://www.facebook.com/">Facebook</Link></li>
                    <li><Link className={classes.socialLink} target='__blank' href="https://www.linkedin.com/">Linkedin</Link></li>
                  </ul>

                  <ul className={classes.address}>
                    <li><Link className={classes.socialLink} target='__blank' href="https://www.google.com/maps">Миколаїв</Link></li>
                    <li><Link className={classes.socialLink} target='__blank' href="https://www.google.com/maps">вул.Тиха 85В</Link></li>
                  </ul>
              </div>
              <div className={classes.allRule}>
                <div className={classes.rule}>YaBao Всі права захищені ©{new Date().getFullYear()}</div>
                <div className={classes.cardsPay}>
                  <Image src={'/images/visa.webp'} width={45} height={45} alt='You will see paySystem'/>
                  <Image src={'/images/pay.webp'} width={45} height={45} alt='You will see paySystem'/>
                  <Image src={'/images/master.webp'} width={45} height={45} alt='You will see paySystem'/>
                </div>
              </div>
            </div>
        </div>

        <div className={classes.block2}>
            <div className={classes.connect}>
              <HeaderH h={'h3'} clazz={classes.h3}>Залишились питання? А ми завжди на зв'язку:</HeaderH>

              <ul className={classes.socialConnect}>
                  <li className={classes.li}><Link target='__blank' href="https://www.viber.com/"><Image src={'/images/viber.png'} width={30} height={30} alt='viber'/></Link></li>
                  <li className={classes.li}><Link href="https://www.skype.com/" target='__blank'><Image src={'/images/skype.png'} width={30} height={30} alt='skype'/></Link></li>
                  <li className={classes.li}><Link href="https://www.messenger.com/" target='__blank'><Image src={'/images/mess.png'} width={30} height={30} alt='messanger'/></Link></li>
                  <li className={classes.li}><Link href="https://web.telegram.org/" target='__blank'><Image src={'/images/teleg.png'} width={30} height={30} alt='telegram'/></Link></li>
                  <li className={classes.li}><Link href="https://uk-ua.facebook.com/" target='__blank'><Image src={'/images/face.png'} width={30} height={30} alt='facebook'/></Link></li>
                  <li className={classes.li}><Link href="https://www.instagram.com/" target='__blank'><Image src={'/images/insta.png'} width={30} height={30} alt='instagram'/></Link></li>
                  <li className={classes.liButton}><Button clazz={classes.write}>Написати нам</Button></li>
              </ul>
            </div>

            <div className={classes.orderPhone}>
                <Telefon clazz={classes.phone}>099 611 7693</Telefon>
                <Button setSignIn={setSignIn} clazz={classes.order}>Замовити дзвінок</Button>
            </div>

            <div className={classes.allRule2}>
              <div className={classes.rule}>YaBao Всі права захищені ©{new Date().getFullYear()}</div>
              <div className={classes.cardsPay}>
                  <Image src={'/images/visa.webp'} width={45} height={45} alt='You will see paySystem'/>
                  <Image src={'/images/pay.webp'} width={45} height={45} alt='You will see paySystem'/>
                  <Image src={'/images/master.webp'} width={45} height={45} alt='You will see paySystem'/>
              </div>
            </div>
        </div>
       </div>
      </div>
      {<Modal hideOverlay={hideOverlay} modal={signIn}><CallOrder setSignIn={setSignIn}/></Modal>}
    </footer>
  )
}

export default Footer;