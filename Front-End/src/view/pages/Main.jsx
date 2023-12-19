import "../css/Default.css"
import {Link} from "react-router-dom"
import Button from "react-bootstrap/Button"

const MainPage =() => {
    return(
        <div className="test">
            <p>Hello welcome to my website!!</p>
            <Link to={"/Projects"}>
                <Button variant="primary">Get Started</Button>
            </Link>
        </div>
    );
}

export default MainPage;