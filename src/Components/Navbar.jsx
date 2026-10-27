import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark px-4">
      <Link className="navbar-brand" to="/">
        Student Portal
      </Link>
      
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/students">Students</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/courses">Courses</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;