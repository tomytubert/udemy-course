import React, { useState } from "react";
import { NavLink,useHistory } from "react-router-dom";
import { Menu, Container, Button } from "semantic-ui-react";
import SignedOutMenu from "./SignedOutMenu";
import SignedInMenu from "./SignedInMenu";
const Navbar = ({ setFormOpen }) => {
  const history = useHistory();
  const [authenticated, setAuthenticated] = useState(false);
  
  function handleSignOut(){
      setAuthenticated(false)
      history.push("/");
  }
  return (
    <>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item as={NavLink} exact to="/" header>
            <img
              src="/assets/logo.png"
              alt="logo"
              style={{ marginRight: 15 }}
            />
            RE-events
          </Menu.Item>
          <Menu.Item as={NavLink} to="/events" name="Events">
            Events
          </Menu.Item>
          {authenticated && (
            <Menu.Item as={NavLink} to="/create-event">
              <Button
                onClick={() => setFormOpen(true)}
                positive
                inverted
                content="Create Event"
              />
            </Menu.Item>
          )}

          {authenticated ? (
            <SignedInMenu signOut={handleSignOut} />
          ) : (
            <SignedOutMenu setAuthenticated={setAuthenticated} />
          )}
        </Container>
      </Menu>
    </>
  );
};

export default Navbar;
