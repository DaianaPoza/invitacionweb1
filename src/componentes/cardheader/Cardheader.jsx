import './Cardheader.css';
import Card from 'react-bootstrap/Card';
import header2 from '../../assets/header2.png';

function Cardheader() {
  return (
    <Card className="card-header-custom">
      <Card.Img
        variant="top"
        src={header2}
        alt="Imagen del header"
      />

      <Card.Body className='cardbody'>
        <Card.Title>
            <h1 className='cardtext'> Maria & Felipe </h1>
        </Card.Title>
        <Card.Text >
        <h2 className='cardtext'>  31 · 01 · 2027  </h2>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Cardheader;
