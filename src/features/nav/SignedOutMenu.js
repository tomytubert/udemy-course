import React from "react";
import { Menu, Button } from 'semantic-ui-react';

const SignedOutMenu = ({setAuthenticated}) => {
  return (
    <>
      <Menu.Item>
        <Button onClick={()=> setAuthenticated(true)} basic inverted content="Login" />
      </Menu.Item>
      <Menu.Item>
        <Button
          basic
          inverted
          content="Register"
          style={{ marginLeft: "0.5em" }}
        />
      </Menu.Item>
    </>
  );
};

export default SignedOutMenu;
