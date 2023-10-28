
import Card from 'react-bootstrap/Card';

const AboutUs = () => {
  return (
    <>
    <h2>About Us</h2>
    <div style={{display: 'flex', paddingLeft:'40px', justifyContent:'center',alignContent:'center'}}>
    
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="src/assets/images/carta1.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="src/assets/images/carta2.jpg" />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
    </Card.Body>
  </Card>
  </div>
  </>
  );
}

export default AboutUs;