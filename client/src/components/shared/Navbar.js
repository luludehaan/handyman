import {Link} from 'react-router-dom';
import {Menu} from 'semantic-ui-react';
const Navbar = () => {
  return (
    <Menu>
      <Link to="/"><Menu.Item>Homepage</Menu.Item></Link>
      <Link to="/handymans"><Menu.Items>Handydandymen</Menu.Items></Link>
      <Link to="/services"><Menut.Items>Our Services</Menut.Items></Link>
      <Link to="/comments"><Menu.Items>Comments</Menu.Items></Link>
    </Menu>
  )
}

export default Navbar;