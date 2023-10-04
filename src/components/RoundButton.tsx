import "./RoundButton.style.css";

const RoundButton = ({
  rating,
  handleOnClick,
  selected,
}: {
  rating: number;
  handleOnClick: () => void;
  selected: boolean;
}) => {
  return (
    <div
      className={`round-button ${selected ? "selected" : null}`}
      onClick={handleOnClick}
    >
      {rating}
    </div>
  );
};

export default RoundButton;
