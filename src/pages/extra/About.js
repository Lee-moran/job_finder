import React from 'react';
import { Container, Row } from 'react-bootstrap';
import styles from '../../styles/About.module.css';


function About() {
  return (
    <Container className={styles.Content}>
      <img src='' alt="" height="70" />
      <h2>
        <strong> About </strong>
      </h2>
      <hr />
      <div className={styles.box}>
      <p>
        Here at Finder, we pride ourselver in connecting the carrer professional 
        with the jobSeeker. Those looking to branch out and learn more about the industry 
        they work in. Add extra skills, connect, and explore the professional world of business.
      </p>
      <p>
        We strive to provide you with a Online blog based platform designed just for JobSeekers 
        and professionals wanting to learn more. To be able to view the buisness world like no other.
        And learn from experts in there feild.
        (signUp and start Learning)
        To share what you have learn and pass on that knowledge or experince.
        Being able to see the fun side of business also.
      </p>
      <p>
        In an effort to bring the community together, we also invite our users
        to interact with the sites social aspect. Here, you can create a post
        and tell us all exactly what you have captured. 
        <br></br>
        <em>Shared with use what your business or pass on your experinces.</em>
      </p>
      <p>
        Users can follow each other, like each others posts, and leave a
        friendly comment should they wish. Connecting to one another.
      </p>
      
      <p>
        Come see, what you can learn today!
      </p>
      </div>
      <br />
      <h2>
        <strong>Social Media:</strong>
      </h2>
      <hr />
      <Row className={styles.SocialIconsAlign}>
        <a
          href="https://facebook.com/"
          target="_blank"
          rel="noreferrer"
          aria-label="Visit our Facebook page (opens in a new tab)"
        >
          <i className="fa-brands fa-facebook-f" />
        </a>
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noreferrer"
          aria-label="Visit our Twitter page (opens in a new tab)"
        >
          <i className="fa-brands fa-twitter" />
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noreferrer"
          aria-label="Visit our Instagram page (opens in a new tab)"
        >
          <i className="fa-brands fa-instagram"/>
        </a>

        <a
          href="https://www.youtube.com/"
          target="_blank"
          rel="noreferrer"
          aria-label="Visit our YouTube page (opens in a new tab)"
        >
          <i className="fa-brands fa-youtube" />
        </a>

        <a
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
          aria-label="Visit my Github page (opens in a new tab)"
        >
          <i className="fa-brands fa-github" />
        </a>

        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noreferrer"
          aria-label="Visit my Linkedin page (opens in a new tab)"
        >
          <i className="fa-brands fa-linkedin-in" />
        </a>
      </Row>
      <br />
      <p id="styles">
        Dublin, Ireland
        <br />
        Project created for educational purposes only.
      </p>
    </Container>
  );
}

export default About;