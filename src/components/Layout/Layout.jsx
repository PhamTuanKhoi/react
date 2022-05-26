import Routers from "../../router/Routers";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";


const Layout = () => {
    return (
        <div>
            <Header />
            <div>
                <Routers />
            </div>
            <Footer />
        </div>
    )
}

export default Layout;