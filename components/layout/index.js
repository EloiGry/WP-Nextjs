import NavBar from "./NavBar";
import Footer from "./Footer";

export default function Layout({data, children}) {
    return (
        <>
            <NavBar header={data.header} menu={data.menuHeader}/>
                <main> {children} </main>
            <Footer header={data.header} footer={data.footer} menuFooter={data.menuFooter} />
        </>

    )

}