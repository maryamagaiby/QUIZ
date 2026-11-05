import { useNavigate } from 'react-router-dom';
function Home() {

  const navigate = useNavigate();
  function startQuiz() {
    navigate('/quiz');
  }
  
  return (
    <div className="container text-center mt-5">
      <div className="card p-5 shadow-sm">
        <h1 class="text-dark">Quiz App</h1>
        <p class="text-dark">Test your general knowledge!</p>
      </div>

      <button
        className="btn btn-primary mt-4" 
        onClick={startQuiz}
      >
        Start Quiz
      </button>
    </div>
  );
}

export default Home;