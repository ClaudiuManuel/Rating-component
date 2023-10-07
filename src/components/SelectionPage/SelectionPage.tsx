import RoundButton from "../RoundButton/RoundButton";
import starSvg from "../../assets/icon-star.svg";

const SelectionPage = ({
  selectedRating,
  setSelectedRating,
  setIsVoteSubmitted,
}: {
  selectedRating: number;
  setSelectedRating: React.Dispatch<React.SetStateAction<number>>;
  setIsVoteSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <>
      <div className="round-button no-hover-effect">
        <img src={starSvg}></img>
      </div>
      <div className="text-container">
        <h2>How did we do?</h2>
        <p>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
      </div>
      <div className="ratings">
        {[...Array(5).keys()]
          .map((x) => ++x)
          .map((rating) => (
            <RoundButton
              rating={rating}
              handleOnClick={() => setSelectedRating(rating)}
              selected={selectedRating === rating}
            />
          ))}
      </div>
      <button
        onClick={() => (selectedRating ? setIsVoteSubmitted(true) : false)}
      >
        Submit
      </button>
    </>
  );
};

export default SelectionPage;
