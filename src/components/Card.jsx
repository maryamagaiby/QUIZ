function Card({ question, answers, selected, onSelect }) {


    return (
        <div  className="card" >
            <div className="card-body">
            
            <h5 className="card-title">{question}</h5>
            {answers.map((answer, index) => (
                <div className="form-check" key={index}>
                    <input
                        className="form-check-input"
                        type="radio"
                        name={question}
                        id={`answer-${index}`}
                        value={answer}
                        checked={selected=== answer}
                        onChange={()=> onSelect(answer)}
                        
                        
                    />

                    <label
                        className="form-check-label">
                            {answer}
                    </label>
                    </div>
            ))} 
        </div>
        </div>
        
    );
}

export default Card;