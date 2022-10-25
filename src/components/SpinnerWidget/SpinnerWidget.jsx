import Spinner from 'react-bootstrap/Spinner';

const SpinnerWidget = () => {
	return (
    <Spinner className="d-block mx-auto" animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}

export default SpinnerWidget;