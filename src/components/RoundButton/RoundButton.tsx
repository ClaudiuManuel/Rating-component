const RoundButton = ({
    rating,
    handleOnClick,
    selected,
}: {
    rating: number;
    handleOnClick: () => void;
    selected: boolean;
}) => {
    const selectedStyling =
        "bg-[#959EAC] pointer-events-none text-white cursor-default";
    return (
        <div
            className={`w-12 h-12 rounded-full bg-[#252f33] hover:bg-[#FB7718] flex justify-center items-center  hover:text-white cursor-pointer ${
                selected ? selectedStyling : "text-[#959EAC]"
            }`}
            onClick={handleOnClick}
        >
            {rating}
        </div>
    );
};

export default RoundButton;
