import ReactDOM from "react-dom";
import "./images/logo.svg"
import "./index.css";
import "./Navbar.css";
import "./Sepline.css"
import "./Section2.css"
import "./Faq.css"
import "./Footer.css"
import App from "./App";
import Header from "./Header";
import { Main } from "./Main";
import Navbar from "./Navbar";
import Section2 from "./Section2";
import Faq from "./Faq";
import Footer from "./Footer";
import {Sepline} from "./Sepline";

ReactDOM.render(
<div>
    {<Navbar/>}
    {<Sepline/>}
    {<Section2/>}
    {<Sepline/>}
    {<Faq/>}
    {<Sepline/>}
    {<Footer/>}
    {<Sepline/>}
</div>,
document.getElementById("root")
);
<p>Lorem200</p>