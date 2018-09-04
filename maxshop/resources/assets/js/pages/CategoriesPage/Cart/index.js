import React, {Component} from "react";
import Header from "../../../components/HeaderComponent";
import Banner from "../../../components/BannerComponent";
import Footer from "../../../components/FooterComponent";
import Wocart from "./Wocart";

class Cart extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Banner/>
                <Wocart/>
                <Footer/>
            </div>
        );
    }
}

export default Cart;