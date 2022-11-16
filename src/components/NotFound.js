import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="not__found">
    <h2>404</h2>
    <p>Page not found</p>

    <Link to="/">
      Back to Home
    </Link>
  </div>
);

export default NotFound;
