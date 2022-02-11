import { useContext } from "react";
import { FeedbackContext } from "../Context/Context";

const Statistics = () => {
    const {good, neutral, bad, totalFeedback, countPositiveFeedbackPercentage} = useContext(FeedbackContext);
    return ( 
    <>
    <h2>Statistics</h2>
        <p>good: {good}</p>
        <p>neutral:{neutral}</p>
        <p>bad:{bad}</p>
        <p>total:{totalFeedback}</p>
        <p>positivePercentage:{Math.floor(countPositiveFeedbackPercentage())}%</p>
    </>
     );
}


export default Statistics;