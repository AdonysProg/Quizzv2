import React, { useState } from 'react';
import Button from './components/Button';
import Card from './components/Card';
import Feedback from './components/Feedback';
import data from './data.json';

function App() {
  const questions = data.sort(() => Math.random() - 0.5);
  const [dataLength, setDataLength] = useState(questions.length);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers]: any = useState([]);

  const nextQuestion = (currentIndex: number) => {
    if (currentIndex <= dataLength) {
      setIndex(currentIndex + 1);
    }
  };

  const saveAnswer = (answer: string, id: number) => {
    const oldAnswers = answers;
    oldAnswers.push({
      id: id,
      answer: answer,
      correctAnswer: questions[id].answer,
      title: questions[id].title,
    });
    setAnswers(oldAnswers);
  };

  const displayQuestion = (question: any) => {
    return (
      <React.Fragment>
        <Card
          key={question.id}
          title={question.title}
          next={nextQuestion}
          submit={saveAnswer}
          index={index}
        ></Card>
      </React.Fragment>
    );
  };
  return (
    <div className="App">
      {questions[index] && displayQuestion(questions[index])}
      {index >= dataLength ? <Feedback answers={answers} /> : null}
    </div>
  );
}

export default App;
