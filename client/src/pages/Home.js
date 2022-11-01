import React from 'react';
import basicImg from "../assets/images/basic.png"
import proImg from "../assets/images/pro.png"

import Auth from '../utils/auth';
// import Typewriter from 'typewriter-effect';
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';

const Home = () => {
  // const { data: userData } = useQuery(QUERY_ME);
  // const reviews = data?.reviews || [];

  // const loggedIn = Auth.loggedIn();

  return (
    <main>
        <Container className="home-section" id="home">
          <Row>
            <Col md={6} classname="card-section">
              <Card style={{ width: '18rem' }} className="plan-card">
                <Card.Img variant="top" src={basicImg} className="card-img"/>
                <Card.Body className='text-center'>
                  <Card.Title className='plan-card-title'>Basic Plan</Card.Title>
                  <Card.Text className='plan-card-text'>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary" className='plan-card-button'>Let's go shopping!</Button>
                  {/* need to add onclick to go to shopping page for coffees
                  also has to have logged in auth  */}
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} classname="card-section">
              <Card style={{ width: '18rem' }} className="plan-card">
                <Card.Img variant="top" src={proImg} className="card-img"/>
                <Card.Body className='text-center'>
                  <Card.Title className='plan-card-title'>Pro Plan</Card.Title>
                  <Card.Text className='plan-card-text'>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary" className='plan-card-button'>Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
    </main>
    // <main>
    //   <div className="flex-row justify-space-between">
    //     <div className={`col-12 mb-3 ${loggedIn && 'col-lg-8'}`}>
    //       {loading ? (
    //         <div>Loading...</div>
    //       ) : (
    //         <ReviewList
    //           reviews={thoughts}
    //           title="Some Feed for Thought(s)..."
    //         />
    //       )}
    //     </div>
    //     {loggedIn && userData ? (
    //       <div className="col-12 col-lg-3 mb-3">
    //         <FriendList
    //           username={userData.me.username}
    //           friendCount={userData.me.friendCount}
    //           friends={userData.me.friends}
    //         />
    //       </div>
    //     ) : null}
    //   </div>
    //   <div className="flex-row justify-space-between mt-10">
    //     <Container fluid className="home-section" id="home">
    //         <Row>
    //             <Col md={7} className="home-header">
    //             <h1 style={{ paddingBottom: 15 }} className="heading gray">
    //                 Hi There!
    //             </h1>

    //             <h1 className="heading-name gray">
    //                 I'M
    //                 <strong className="main-name orange"> MATTHEW DEHART</strong>
    //             </h1>

    //             <div style={{ padding: 50, textAlign: "left" }}>
    //             </div>
    //             </Col>

    //             <Col md={5} style={{ paddingBottom: 20 }} className="hometype">
    //             <Typewriter
    //                 options={{
    //                 strings: [
    //                     "Web Developer",
    //                     "Coding Lover",
    //                     "Video Game Enthusiast",
    //                     "Food Connoisseur",
    //                 ],
    //                 autoStart: true,
    //                 loop: true,
    //                 deleteSpeed: 100,
    //                 }}
    //             />
    //             </Col>
    //         </Row>
    //         <Row>
    //             <Col md={7} style={{ paddingBottom: 20 }} className="homeicon">
    //             </Col>
    //             <Col md={5} className="heading-about">
    //             <h1 style={{ paddingBottom: 25 }} className="heading-me gray">
    //                 A little about <strong className="main-name orange"> ME</strong>
    //             </h1>
    //             <h4 style={{ padding: 50, textAlign: "left" }} className="heading-about-text gray">
    //             I started out in coding through Butler Coding Bootcamp and haven't stopped since. <br/><br/>
    //             I have gone into depth in <strong className="orange"> Javascript, Node.js and React.js </strong><br/><br/>
    //             I am currently trying to <strong className="orange">expand my field </strong> by exploring different languages.
    //             </h4>
    //             </Col>
    //         </Row>
    //     </Container>
    //   </div>
    // </main>
  );
};

export default Home;