import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card.jsx";


export default function Quiz() {
  const [questions, setQuestions] = useState([]);
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    
  
    const navigate = useNavigate();
    useEffect(() => {
      async function loadQuestions() {
        try {
          const response = await fetch(
            "https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple"
          );
  
          const data = await response.json();
        
  
         
          const formatted = data.results.map((q) => ({
            question: q.question,
            correct: q.correct_answer,
            answers: [q.correct_answer, ...q.incorrect_answers].sort(() => Math.random() - 0.4)
          }));
  
          setQuestions(formatted);
        } catch (err) {
          setError("Could not load questions.");
        } finally {
          setLoading(false);
        }
      }
  
      loadQuestions();
    }, []);
    function handleAnswer(questionIndex, answer) {
      const UserSelection = { ...selectedAnswers };
      UserSelection[questionIndex] = answer;
      setSelectedAnswers(UserSelection);
    }
    
    
    
    function submitQuiz() {
      let score = 0;
  
      questions.forEach((q, index) => {
        if (selectedAnswers[index] === q.correct) {
          score++;
        }
      });
  
      navigate("/results", {
        state: {
          score: score,
          total: questions.length
        }
      });
    }
  
    
    if (loading) {
      return (
        <div className="container text-center mt-5">
          <h3>Loading questions...</h3>
        </div>
      );
    }
  
    if (error) {
      return (
        <div className="container text-center mt-5">
          <p className="text-danger">{error}</p>
        </div>
      );
    }
  
 
  return (
    <div className="container mt-5 text-start">
      {questions.map((q, index) => {
        return (
        <Card
          key={index}
          question={`Question ${index+1}: ${q.question}`}
          answers={q.answers}
          selected={selectedAnswers[index]}
          onSelect={(answer) => handleAnswer(index, answer)}
          />
        );
        })}

      <div className="text-center mt-4">
        <button
          className="btn btn-success btn-lg"
          onClick={submitQuiz}
        >
          Submit Quiz
        </button>
      </div>

    </div>
  );
}
