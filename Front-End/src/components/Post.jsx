import { Card } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

function PostCard ({ obj, id, title, imgLink, text, date }) {

    return(
        <div>
            <Card className="PostCard" style={{ width: '20rem' }}>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img src={imgLink}></Card.Img>
                    <Card.Text>{text}</Card.Text>
                    <Card.Footer>{date}</Card.Footer>
                </Card.Body>
            </Card>
        </div>
    )
}

export default PostCard;