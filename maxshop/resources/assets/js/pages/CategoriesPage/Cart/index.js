import React, {Component} from "react";
import Banner from "../../../components/BannerComponent";
import Wocart from "./Wocart";

class Cart extends Component {
    render() {
        return (
            <div>
                <Banner/>
                <Wocart/>
            </div>
        );
    }
}

export default Cart;