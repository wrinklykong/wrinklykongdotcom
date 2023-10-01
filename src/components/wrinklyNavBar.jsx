import { Button } from "react-bootstrap"
import { Link } from "react-router-dom";
import wrinkly from "../view/images/wrinkly_image.webp"

const WrinklyNavBar = () => {
    return (
        <div className="d-inline align-bottom">
            <div className="d-inline align-bottom">
                <img src={wrinkly} style={{height:'4%', width:'4%'}}></img>
                <a><b>  WrinklyKong</b></a>
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