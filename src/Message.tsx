import * as React from "react";
import Accordion from "react-bootstrap/Accordion";

const Message: React.FC = () => {
  return (
    <div className="container">
      <h1 className="m-heading">This is Message Page</h1>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Message No-1</Accordion.Header>
          <Accordion.Body>
            In traditional websites, the browser requests a document from a web
            server, downloads and evaluates CSS and JavaScript assets, and
            renders the HTML sent from the server. When the user clicks a link,
            it starts the process all over again for a new page. Client side
            routing allows your app to update the URL from a link click without
            making another request for another document from the server.
            Instead, your app can immediately render some new UI and make data
            requests with fetch to update the page with new information.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Message No-2</Accordion.Header>
          <Accordion.Body>
            This enables faster user experiences because the browser doesn't
            need to request an entirely new document or re-evaluate CSS and
            JavaScript assets for the next page. It also enables more dynamic
            user experiences with things like animation. Client side routing is
            enabled by creating a Router and linking/submitting to pages with
            Link andForm
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Message No-3</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, quos
            aliquid similique autem nihil tempore quae recusandae nesciunt quam
            exercitationem. Neque ex enim fugit, natus quae fuga pariatur
            quibusdam ipsam!
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Message;
