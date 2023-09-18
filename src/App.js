import { useState } from "react";
import "./App.css";

const questions = [
  {
    id: 1,
    title: "Is this a good product?",
    info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem.",
  },
  {
    id: 2,
    title: "How much does it cost?",
    info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem.",
  },
  {
    id: 3,
    title: "When can I get it?",
    info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem.",
  },
];

function App() {
  return (
    <div className="faq-container">
      <h1>Frequently Asked Questions</h1>
      <Accordion></Accordion>
    </div>
  );
}

function Accordion() {
  return (
    <ul className="acc-ul">
      {questions.map((question) => (
        <AccordionItem key={question.id} currQues={question}></AccordionItem>
      ))}
    </ul>
  );
}

function AccordionItem({ currQues }) {
  const [isOpen, setIsOpen] = useState(true);
  function handleOpen() {
    setIsOpen(!isOpen);
  }
  return (
    <li>
      <div className="acc-item">
        <h2>{currQues.title}</h2>
        <p onClick={handleOpen}>{isOpen ? "+" : "-"}</p>
      </div>
      {!isOpen && <p className="desc">{currQues.info}</p>}
    </li>
  );
}
export default App;
