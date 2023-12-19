import { Button } from "react-bootstrap"
import { Link } from "react-router-dom";
import wrinkly from "../view/images/wrinkly_image.webp"

const WrinklyNavBar = () => {
    return (
        <div className="WrinklyNavBar">
            <div className="BrandBar">
                <p>
                    <img src={wrinkly} style={{height:'2%', width:'2%'}} alt="WKLogo"></img>
                    <b>WrinklyKong</b>
                </p>
            </div>
            <Link to={"/"}>
                <Button >Blog</Button>
            </Link>
            <Link to={"/Projects"}>
                <Button>Projects</Button>
            </Link>
            <Link to={"/About"}>
                <Button>About</Button>
            </Link>
        </div>
    )
}

export default WrinklyNavBar;