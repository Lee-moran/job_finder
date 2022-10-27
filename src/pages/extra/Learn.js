import {Card, CardGroup, Button} from 'react-bootstrap';
import code from "../../assets/Code2.jpg";
import cv from "../../assets/Cv.jpg";
import Interview from "../../assets/Interview.jpg";
import styles from "../../styles/Card.module.css";


function learn() {
  return (
    <CardGroup className={styles.Card}>
      <Card>
        <Card.Img variant="top" src={code} />
        <Card.Body>
          <Card.Title>Code Skills</Card.Title>
          <Card.Text>
            Come explore the world of coding.
            Html, Css, Js, Python,
            Django, React.
          </Card.Text>
          <Button href="/CodeSkills" variant="outline-info">Code</Button>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      
      <Card>
        <Card.Img variant="top" src={cv} />
        <Card.Body>
          <Card.Title>CV Master class </Card.Title>
          <Card.Text>
            Learn the in's and out's of successul cv writting skils.
          </Card.Text>
          <Button href="/CvSkills" variant="outline-info">CV</Button>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={Interview} />
        <Card.Body>
          <Card.Title>Interview tips</Card.Title>
          <Card.Text>
            Get inside tips from industry professianl on how to approach Interviews
          </Card.Text>
          <Button href="/InterviewSkills" variant="outline-info">Interview</Button>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
  
}

export default learn;




