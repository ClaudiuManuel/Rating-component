import { useState } from "react";
import RoundButton from "./components/RoundButton";
import starSvg from "./assets/icon-star.svg";
import "./App.css";
import "./components/RoundButton.style.css";

function App() {
  const [selectedRating, setSelectedRating] = useState<number>(0);

  return (
    <div className="card">
      <div className="card-container">
        <div className="round-button">
          <img src={starSvg}></img>
        </div>
        <h2>How did we do?</h2>
        <p>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        <div className="ratings">
          {[...Array(6).keys()]
            .map((x) => x++)
            .map((rating) => (
              <RoundButton
                rating={rating}
                handleOnClick={() => setSelectedRating(rating)}
                selected={selectedRating === rating}
              />
            ))}
        </div>
        <button>Submit</button>
      </div>
    </div>
  );
}

export default App;
