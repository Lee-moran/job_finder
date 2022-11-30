import React from 'react'
import {Card, ListGroup, Container, Row, Col,}from 'react-bootstrap';
import cv from '../../assets/Cv.jpg';
import TEMP from '../../assets/CVTEMP.jpg';
import group from '../../assets/group.jpg';
import styles from '../../styles/CV.module.css';


const CvSkills = () => { 
  return (
    <Container className={styles.TOP}>
      <Row>
        <Col xs={{ order: 'last' }}>
          <Card style={{ width: '20rem' }}>
            <Card.Img variant="top" src={cv} />
            <Card.Body>
              <Card.Title className={styles.head}>CV Skills</Card.Title>
              <Card.Text className={styles.body} >
                Some quick tip to improve your CV
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item className={styles.body}>Masters in recurting</ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Card.Link className={styles.link} href="https://www.hays.ie/resources/career-advice/writing-a-cv" target="_blank"> HAYS</Card.Link>
            </Card.Body>
          </Card>
          </Col>
        <Col xs>
          <Card style={{ width: '20rem' }}>
            <Card.Img variant="top" src={TEMP} />
            <Card.Body>
              <Card.Title className={styles.head}>CV Skills</Card.Title>
              <Card.Text className={styles.body}>
              Your ultimate guide on how to write a CV
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item className={styles.body}>Masters in recurting</ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Card.Link className={styles.link} href="https://www.recruiters.ie/blog/how-to-write-a-cv-guide/" target="_blank"> RECRUITERS.IE </Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={{ order: 'first' }}>
        <Card style={{ width: '20rem' }}>
            <Card.Img variant="top" src={group} />
            <Card.Body>
              <Card.Title className={styles.head}>CV Skills</Card.Title>
              <Card.Text className={styles.body}>
              Looking for professional Help
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item className={styles.body}> Reach out to our memebers </ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Card.Link className={styles.link} href="/"> Home </Card.Link>
            </Card.Body>
          </Card>
          
          
          </Col>
      </Row>
    </Container>
  );
}

export default CvSkills