import "../App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

function Header (){
    return(
    <Navbar className="headernav">
      <Container>
        <Navbar.Brand href="#home" className="haeadertitle">Portfolio</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
             <a href="#login"><Button variant="primary" className="btncv">Downlaod CV</Button>{' '}</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}

export default Header;