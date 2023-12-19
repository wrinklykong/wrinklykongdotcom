import { Card } from "react-bootstrap";

const ProjectCard = ({ obj }) => {
    return(
        <Card className="ProjectCard" style={{ width: '20rem' }}>
            <Card.Body>
                <Card.Title>Help</Card.Title>
            </Card.Body>
        </Card>
    )
}

export default ProjectCard;