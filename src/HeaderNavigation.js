import React from "react";
import Nav from "react-bootstrap/Nav";

export default class HeaderNavigation extends React.Component {
  render() {
    return (
      <>
        <Nav
          activeKey="/home"
          onSelect={selectedKey => toString(`selected ${selectedKey}`)}
        >
          <Nav.Item>
            <Nav.Link to eventKey="/">
              {" "}
              Active{" "}
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">Link</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">Link</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="disabled" disabled>
              Disabled
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </>
    );
  }
}
