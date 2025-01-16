import { Avatar, Dropdown, Navbar } from "flowbite-react";
import '../Navbar/navbar.css'
const NavsItems = () => {
  return (
    <div>

<Navbar fluid rounded className="shadow-2xl container mx-auto md:px-24">
      <Navbar.Brand href="https://flowbite-react.com">
        {/* <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" /> */}
        <h1 className="text-3xl font-bold -tracking-wide leading-8 animate-charcter flex items-center justify-center">
          <a href="/">CAREER VISION</a></h1>
      </Navbar.Brand>
      <div className="flex md:order-2">
      
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
          }
        >

          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">name@flowbite.com</span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse className="text-[15px] font-medium text-secondary">
        <Navbar.Link href="#" className="text-[15px] font-medium text-secondary" active> 
          Home
        </Navbar.Link>
        <Navbar.Link href="#" className="text-[15px] font-medium text-secondary">About</Navbar.Link>
        <Navbar.Link href="#" className="text-[15px] font-medium text-secondary">Blog</Navbar.Link>
        <Navbar.Link href="#" className="text-[15px] font-medium text-secondary">Add Blog</Navbar.Link>
        <Navbar.Link href="#" className="text-[15px] font-medium text-secondary">Manage Block</Navbar.Link>
        
      </Navbar.Collapse>
    </Navbar>



    
   
    </div>
  )
}

export default NavsItems