import { Container, Accordion } from "react-bootstrap";

const faqHeadings = [
  "What is Octafarm?",
  "What is Auto-Compounding?",
  "What Issues is Octafarm trying to Solve?",
  "What Makes Octafarm Unique?",
  "What are the Benefits of Yield Farming/Staking on Octafarm?",
  "What is Octafarm?",
  "What is Auto-Compounding?",
];

function FAQs() {
  return (
    <div className="faqs my-5">
      <Container>
        <div>
          <h2 className="d-inline">FAQs </h2>
          <small className="text-secondary">
            <i>-frequently asked questions</i>
          </small>
        </div>
        <Accordion className="mt-4 px-2">
          {faqHeadings.map((item, key) => (
            <Accordion.Item eventKey={key} key={key}>
              <Accordion.Header>{item}</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </Container>
    </div>
  );
}
export default FAQs;
