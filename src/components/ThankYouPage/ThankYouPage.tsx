import ThankYouIllustration from "../../assets/illustration-thank-you.svg";

const ThankYouPage = ({
  selectedRating,
}: {
  selectedRating: number;
}) => {
  return (
    <>
      <div className="">
        <img src={ThankYouIllustration}></img>
      </div>
      <div className="rating-result">{`You selected ${selectedRating} out of 5`}</div>
      <div className="text-container">
        <h2>Thank you!</h2>
        <p>
          We appreciate you taking the time to give a rating.
          If you ever need more support don't hesitate to get in touch!
        </p>
      </div>
    </>
  );
};

export default ThankYouPage;
