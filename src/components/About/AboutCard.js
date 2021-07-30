import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Website was developed by <span className="purple">Flux </span>
            from <span className="purple"> Bhubaneswar, India.</span>
            <br /> The Nines Society is a collection of gamers set on making a difference through charity and education; as well as changing the scope of what a "clan" is capable of.
            <br /> We offer our members the opportunity to enrich themselves with charitable outreach, accredited certificate courses, and a support system to help them reach their goals.
            <br />
            Apart from gaming, some other activities that we love to do are!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Streaming
            </li>
            <li className="about-activity">
              <ImPointRight /> Educating
            </li>
            <li className="about-activity">
              <ImPointRight /> Donating
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "We can not solve our problems with the same thinking we use to create them."{" "}
          </p>
          <footer className="blockquote-footer">Woods</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
