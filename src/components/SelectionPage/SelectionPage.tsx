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
            <div className="w-12 h-12 rounded-full bg-[#252f33] flex justify-center items-center  hover:text-white cursor-pointer">
                <img src={starSvg}></img>
            </div>
            <div className="flex flex-col w-full">
                <h2 className="m-0 text-white font-['OverpassBold'] text-2xl ">
                    How did we do?
                </h2>
                <p className="text-[#728197] text-sm font-['OverpassRegular'] pt-1.5">
                    Please let us know how we did with your support request. All
                    feedback is appreciated to help us improve our offering!
                </p>
            </div>
            <div className="flex justify-between">
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
                onClick={() =>
                    selectedRating ? setIsVoteSubmitted(true) : false
                }
                className="bg-[#FB7718] hover:bg-white text-white hover:text-[#FB7718] border-0 uppercase rounded-[24px] font-['OverpassBold']"
            >
                Submit
            </button>
        </>
    );
};

export default SelectionPage;
