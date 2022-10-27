import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Spinner from 'react-bootstrap/Spinner';

const SpinnerWidget = ({ background }) => {
  background = `/img/backgrounds/${background}-1800.webp`

	return (
    <section className="App-content container-fluid" style={{ 
			backgroundImage: `url(${process.env.PUBLIC_URL + background})`,
		}}>
			<Container className="container-lg">
        <Row className="row-gap">
          <Spinner className="d-block mx-auto text-light" animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </Row>
      </Container>
    </ section>
  );
}

export default SpinnerWidget;