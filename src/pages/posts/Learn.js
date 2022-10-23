import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import logo from '../../assets/FINDER1.png'

function learn() {
  return (
    <Card style={{ width: '18rem', margin: '3rem'}}>
      <Card.Img variant="top" src={logo} />
      <Card.Body>
        <Card.Title>Python Master class</Card.Title>
        <Card.Text>
            Python is a high-level, 
            general-purpose programming language.
        </Card.Text>
        <Button variant="primary"> Learn more </Button>
      </Card.Body>
    </Card>
);
}
export default learn;




