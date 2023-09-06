import classes from './footer.module.scss';
import Logo from '@/ui/logo/logo';
import Telefon from '@/ui/telefon/telefon';
import Button from '@/ui/button/button';
import HeaderH from '@/ui/headerH/headerH';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className="container">
       <div className={classes.wrapper}>
        <div className={classes.block1}>
            <div className={classes.contactLogo}>
              <Logo clazz={classes.logo} src={'/images/logo.webp'} width={80} height={60} alt={'You will see logo'}/>

              <div className={classes.phoneOrderBlock}>
                <Telefon clazz={classes.phone}>099 611 7693</Telefon>
                <Button clazz={classes.order}>Замовити дзвінок</Button>
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
                    <li><a className={classes.socialLink1} href="#">YouTube</a></li>
                    <li><a className={classes.socialLink2} href="#">Instagram</a></li>
                  </ul>

                  <ul className={classes.socialSubBlock}>
                    <li><a className={classes.socialLink} href="#">Facebook</a></li>
                    <li><a className={classes.socialLink} href="#">Linkedin</a></li>
                  </ul>

                  <ul className={classes.address}>
                    <li><a className={classes.socialLink} href="#">Миколаїв</a></li>
                    <li><a className={classes.socialLink} href="#">вул.Тиха 85В</a></li>
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
                  <li className={classes.li}><a href="#"><Image src={'/images/viber.png'} width={30} height={30} alt='viber'/></a></li>
                  <li className={classes.li}><a href="#"><Image src={'/images/skype.png'} width={30} height={30} alt='skype'/></a></li>
                  <li className={classes.li}><a href="#"><Image src={'/images/mess.png'} width={30} height={30} alt='messanger'/></a></li>
                  <li className={classes.li}><a href="#"><Image src={'/images/teleg.png'} width={30} height={30} alt='telegram'/></a></li>
                  <li className={classes.li}><a href="#"><Image src={'/images/face.png'} width={30} height={30} alt='facebook'/></a></li>
                  <li className={classes.li}><a href="#"><Image src={'/images/insta.png'} width={30} height={30} alt='instagram'/></a></li>
                  <li className={classes.liButton}><Button clazz={classes.write}>Написати нам</Button></li>
              </ul>
            </div>

            <div className={classes.orderPhone}>
                <Telefon clazz={classes.phone}>099 611 7693</Telefon>
                <Button clazz={classes.order}>Замовити дзвінок</Button>
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
    </footer>
  )
}

export default Footer;