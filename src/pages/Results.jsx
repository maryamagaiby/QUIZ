import { useLocation, useNavigate } from 'react-router-dom';

function Results() {

  const location = useLocation();
  const navigate = useNavigate();
 
// to store the data passed during navigation
  const { score, total } = location.state;
  

  return (
    <div className="container text-center mt-5">

      <div className="card p-5">

        <h1  class="text-dark">Quiz Results</h1>

        <h2 className="mt-4" class="text-dark">
          {score} / {total}
        </h2>

        <h3 className="text-primary mt-3"  class="fw-bold">
          
        </h3>

        <p className="mt-3" class="text-dark">
          You answered {score} questions correctly out of {total}.
        </p>

        <button
          className="btn btn-primary mt-3"
          onClick={() => navigate('/')}
        >
          Try Again
        </button>

      </div>

    </div>
  );
}

export default Results;
