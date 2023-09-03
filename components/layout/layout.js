import Header from "../header/header";

const Layout = (props) => {
  return (
    <>
    <Header data = {props.data}/>
      <main>
        {props.children}
      </main>
    </>
  )
}

export default Layout;