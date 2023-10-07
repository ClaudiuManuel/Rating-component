import { useState } from "react";
import "./App.css";
import "./components/RoundButton/RoundButton.style.css";
import SelectionPage from "./components/SelectionPage/SelectionPage";
import ThankYouPage from "./components/ThankYouPage/ThankYouPage";

function App() {
  const [selectedRating, setSelectedRating] = useState<number>(0);
  const [isVoteSubmitted, setIsVoteSubmitted] = useState<boolean>(false);

  return (
    <div className="card">
      <div
        className={`card-container ${
          isVoteSubmitted ? "selection-specific" : null
        }`}
      >
        {isVoteSubmitted ? (
          <ThankYouPage selectedRating={selectedRating} />
        ) : (
          <SelectionPage
            setSelectedRating={setSelectedRating}
            selectedRating={selectedRating}
            setIsVoteSubmitted={setIsVoteSubmitted}
          />
        )}
      </div>
    </div>
  );
}

export default App;
