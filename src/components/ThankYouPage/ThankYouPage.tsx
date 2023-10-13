import ThankYouIllustration from "../../assets/illustration-thank-you.svg";

const ThankYouPage = ({ selectedRating }: { selectedRating: number }) => {
    return (
        <>
            <div>
                <img src={ThankYouIllustration}></img>
            </div>
            <div className="text-[#FB7718] text-sm rounded-3xl bg-[#232830] py-2 px-4">{`You selected ${selectedRating} out of 5`}</div>
            <div className="flex flex-col w-full">
                <h2 className="m-0 text-white font-['OverpassBold'] text-2xl">
                    Thank you!
                </h2>
                <p className="text-[#728197] text-sm font-['OverpassRegular'] pt-1.5">
                    We appreciate you taking the time to give a rating. If you
                    ever need more support don't hesitate to get in touch!
                </p>
            </div>
        </>
    );
};

export default ThankYouPage;
