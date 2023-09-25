import { Button } from "react-bootstrap"
import { Link } from "react-router-dom";

const TopBar = () => {
    return (
        <div className="TopBar">
            <a>This is the top bar</a>
            <Link to={"/"}>
                <Button variant="dark" size={"lg"} >Main</Button>
            </Link>
            <Link to={"/Projects"}>
                <Button variant="dark" size={"lg"} >Projects</Button>
            </Link>
        </div>
    )
}

export default TopBar;