import { useState } from "react";
import "./App.css";
import SelectionPage from "./components/SelectionPage/SelectionPage";
import ThankYouPage from "./components/ThankYouPage/ThankYouPage";

function App() {
    const [selectedRating, setSelectedRating] = useState<number>(0);
    const [isVoteSubmitted, setIsVoteSubmitted] = useState<boolean>(false);
    const selectionSpecificStyling = "items-center text-center";

    return (
        <div className="flex flex-col items-center justify-center p-8 rounded-2xl bg-[#1b212b] h-[370px] w-[370px]">
            <div
                className={`flex flex-col w-full h-full justify-between ${
                    isVoteSubmitted ? selectionSpecificStyling : null
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
