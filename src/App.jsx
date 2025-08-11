import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";

function LandingPage() {
  return (
    <Container>
      <Col className='profileContainer'>
        <div className='bg'></div>
        <Image
          className='profile'
          src='/a97c9c1d1623ce4edc8f.jpeg'
          roundedCircle
        />
        <h1 className='name'>Danilo Jr. B. Casim</h1>
      </Col>
      <Col className='hobbiesContainer'>
        <h1>My Hobbies</h1>
        <Col className='container-items'>
          <Row>
            <Image src='https://www.uopeople.edu/wp-content/uploads/2022/06/Coding-vs-Programming-5-Key-Differences-To-Remember-550x385.jpg'></Image>{" "}
            <h2>Coding</h2>
          </Row>
          <Row>
            <Image src='https://compote.slate.com/images/d047e61b-5817-4b6a-a58c-d45aeaeb775e.jpg'></Image>
            <h2>Chess</h2>
          </Row>
          <Row>
            <Image src='https://theironoffice.com/cdn/shop/files/Gym_12.23-19.jpg?v=1701994187&width=3840'></Image>
            <h2>Gym</h2>
          </Row>
        </Col>
      </Col>

      <Col className='familyContainer'>
        <h1>My Family</h1>
        <Image src='https://www.andbeyond.com/wp-content/uploads/sites/5/Family-travel.jpg'></Image>
      </Col>

      <Col>
        <h1>My Favorites</h1>
        <Col className='container-items'>
          <Row>
            <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0gRT71EwtApQ8ACXCGyfvsCkuxwIXsx2z8Q&s'></Image>{" "}
            <h2>Strawberry</h2>
          </Row>
          <Row>
            {" "}
            <Image src='https://hips.hearstapps.com/hmg-prod/images/766/grapes-main-1506688521.jpg?resize=640:*'></Image>
            <h2>Grapes</h2>
          </Row>
          <Row>
            {" "}
            <Image src='https://files01.pna.gov.ph/ograph/2023/05/25/iloilo-guimaras-mangoes.jpg'></Image>
            <h2>Mango</h2>
          </Row>
        </Col>
      </Col>

      <Col>
        <h1>Sports</h1>
        <Col className='container-items'>
          <Row>
            <Image src='https://img.olympics.com/images/image/private/t_s_pog_staticContent_hero_xl_2x/f_auto/primary/l5vdbtmouwqm78rqzh78'></Image>{" "}
            <h2>Volleyball</h2>
          </Row>
          <Row>
            <Image src='https://www.usab.com/imgproxy/X-Vd0rLbMD2XFU7MlLAoPizQzK310mZmA3JFrBCcrwI/rs:fit:1600:1024:0/g:ce/q:90/aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3VzYWItY29tLXByb2QvdXBsb2FkLzIwMjUvMDgvMDgvY2Q3NzNmZDktMGMyNC00MzIzLTg5MzItYmZmOWZkYmRlNzk3LmpwZw.png'></Image>
            <h2>Basketball</h2>
          </Row>
          <Row>
            <Image src='https://gameonfamily.com/cdn/shop/articles/Depositphotos_9388060_original.jpg?v=1739840875&width=1100'></Image>
            <h2>Badminton</h2>
          </Row>
        </Col>
      </Col>

      <Col>
        {" "}
        <h1>We want your feedback</h1>
        <Form>
          <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
            <Form.Label>Email address</Form.Label>
            <Form.Control type='email' placeholder='name@example.com' />
          </Form.Group>
          <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
            <Form.Label>Feedback</Form.Label>
            <Form.Control as='textarea' rows={3} />
          </Form.Group>
          <button>Submit</button>
        </Form>
      </Col>
    </Container>
  );
}

export default LandingPage;
