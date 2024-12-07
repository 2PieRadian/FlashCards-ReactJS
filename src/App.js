import { useState } from "react";

const questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript"
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components"
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX"
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props"
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook"
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element"
  }
];

function App() {
  return (
    <div className="App">
      <h1 style={{textAlign: "center", marginBottom: "50px", color: "rgb(97, 97, 97)"}}>FlashCard App</h1>
      <FlashCards />
    </div>
  );
}

function FlashCards() {
  const [selectedID, setSelectedID] = useState(null);

  function handleClick(id) {
    setSelectedID(id === selectedID ? null : id)
  }


  return (
    <div className="flashcards">
        {questions.map(({id, question, answer}) => {
          const areSameID = id === selectedID;

          return(
            <div onClick={() => handleClick(id)} className={areSameID ? 'selected' : ''}>
              <p>{areSameID ? answer : question}</p>
            </div>
          )
        })}
    </div>
  )
}

export default App;