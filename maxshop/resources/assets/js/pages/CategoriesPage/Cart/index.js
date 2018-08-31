import React, {Component} from "react";
import Header from "../../../components/Header";
import Banner from "../../../components/Banner";
import Footer from "../../../components/Footer";
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