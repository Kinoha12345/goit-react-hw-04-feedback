import { useContext } from "react";
import { FeedbackContext } from "../Context/Context";

const Feedback = () => {

  const {countFeedback, options} = useContext(FeedbackContext);
  return (
    <>
      {options.map((option) => (
        <button onClick={countFeedback} type="button" id={option} key={option}>
          {option}
        </button>
      ))}
    </>
  );
};


export default Feedback;