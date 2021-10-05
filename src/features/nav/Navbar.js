import React from 'react';
import { Menu, Container, Button } from 'semantic-ui-react';
const Navbar = ({setFormOpen}) => {
    return ( 
        <>
            <Menu inverted fixed="top">
                <Container>
                    <Menu.Item header>
                        <img src="/assets/logo.png" alt="logo" style={{marginRight:15}}/>
                        RE-events
                    </Menu.Item>
                    <Menu name="Events"/>
                    <Menu.Item>
                        <Button onClick={() => setFormOpen(true)} positive inverted content="Create Event" />
                    </Menu.Item>
                    <Menu.Item>
                        <Button basic inverted content="Login" />
                    </Menu.Item>
                    <Menu.Item>
                        <Button basic inverted content="Register"  style={{marginLeft:"0.5em"}}/>
                    </Menu.Item>
                </Container>
            </Menu>
        </>
     );
}
 
export default Navbar;