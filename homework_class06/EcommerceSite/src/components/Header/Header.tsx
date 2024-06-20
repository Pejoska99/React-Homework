
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
  return (
    <header>
      <nav>
        <NavLink to="/">
        Home</NavLink>
        <NavLink to="/add-product">Add Product</NavLink>
      </nav>
    </header>
  );
};

export default Header;
