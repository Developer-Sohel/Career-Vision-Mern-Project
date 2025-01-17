import { NavLink } from 'react-router-dom';
import '../Navbar/navbar.css'
import { Button, Navbar } from "flowbite-react";


const NavsItems = () => {
  return (
    <div className='shadow-xl'>

<Navbar fluid rounded className='container mx-auto lg:px-24'>
      <Navbar.Brand href="/">
        <h1 className='animate-charcter text-3xl font-bold tracking-wider leading-8'>CAREER VISION</h1>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button>Get started</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        
<NavLink to='/'>
        <Navbar.Link active>
          Home
        </Navbar.Link>
        </NavLink>

        <NavLink to='/about'>
        <Navbar.Link >
          About
        </Navbar.Link>
        </NavLink>

        <NavLink to='/blog'>
        <Navbar.Link >
          Blog
        </Navbar.Link>
        </NavLink>

        <NavLink to='/contact'>
        <Navbar.Link >
          Contact
        </Navbar.Link>
        </NavLink>


      </Navbar.Collapse>
    </Navbar>
      
    </div>
  )
}

export default NavsItems