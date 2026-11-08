import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container } from 'react-bootstrap';
import Name from './component/Name';
import Price from './component/Price';
import Description from './component/Description';
import Image from './component/Image';
import gamerBadge from './asset/Gammer badge.jpg';

const firstName = "Samuel"; 

function App() {
  return (
    <Container style={{ marginTop: '50px', display: 'flex', flexDirection: 'column', alignItems: 'center', background: 'linear-gradient(135deg, #0d1117 0%, #161b22 100%)', minHeight: '850px', borderRadius: '15px' }}>
      
      {/* Create a card that contains all components created using react-bootstrap */}
      <Card style={{ width: '350px', padding: '15px', marginTop: '70px', border: 'none', borderRadius: '15px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
        <Image />
        <Card.Body>
          <Name />
          <Price />
          <Description />
        </Card.Body>
      </Card>

      {/* Display message below the card */}
      <div style={{ marginTop: '20px', textAlign: 'center', color: 'white' }}>
        <h3>
          {firstName ? `Hello, ${firstName}!` : "Hello, there!"}
        </h3>

        {/* Display an image if the first name is provided */}
      {firstName && (
        <img 
          src={gamerBadge}
          alt="welcome" 
          style={{
            width: '100px', 
            marginTop: '15px', 
            borderRadius: '10px'
          }} 
        />
      )}
      </div>

    </Container>
  );
}

export default App;