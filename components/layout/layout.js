import Header from "../header/header";
import Footer from "../footer/footer";

const Layout = (props) => {
  return (
    <>
    <Header data = {props.data}/>
      <main>
        {props.children}
      </main>
    < Footer/>
    </>
  )
}

export default Layout;