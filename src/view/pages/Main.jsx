import "../css/Default.css"
import {Link} from "react-router-dom"
import {Button} from "react-bootstrap"

const Main =() => {
    return(
        <div className="test">
            <p>Hello welcome to my website!!</p>
            <Link to={"/Projects"}>
                <Button variant="dark" size={"lg"} >Get Started</Button>
            </Link>
        </div>
    );
}

export default Main;