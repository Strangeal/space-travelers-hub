import { Link } from 'react-router-dom';
import { IoIosArrowRoundBack } from 'react-icons/io';

const NotFound = () => (
  <div className="not__found">
    <h2>404</h2>
    <p>Page not found</p>

    <Link to="/">
      <IoIosArrowRoundBack />
      Back to Home
    </Link>
  </div>
);

export default NotFound;
