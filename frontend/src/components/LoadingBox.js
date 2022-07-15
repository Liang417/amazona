import { Spinner } from 'react-bootstrap';

export default function LoadingBox() {
  return (
    <Spinner animation="border" role-="status">
      <span calssName="visually-hidden">Loading...</span>
    </Spinner>
  );
}
