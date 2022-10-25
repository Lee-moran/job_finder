import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import code from "../../assets/Code2.jpg";
import cv from "../../assets/Cv.jpg";
import Interview from "../../assets/Interview.jpg";




function learn() {
  return (
    <CardGroup>
      <Card>
        <Card.Img variant="top" src={code} />
        <Card.Body>
          <Card.Title>Python Skills</Card.Title>
          <Card.Text>
            Come explore the world of coding.
          </Card.Text>
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
            Learn the in's and out's to successul cv writting skils{' '}
          </Card.Text>
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
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default learn;




