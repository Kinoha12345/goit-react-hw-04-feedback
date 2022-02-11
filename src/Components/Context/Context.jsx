import { createContext, useState} from "react";

export const FeedbackContext = createContext();

const FeedbackProvider = ({ children }) => {
    const [state, setState] = useState({
        good: 0,
        neutral: 0,
        bad: 0,
      });

    const {good,neutral,bad} = state;

    const options = Object.keys(state);

      const countFeedback = (e) => {
        const target = e.target.id;
        setState((prevState) => ({...prevState ,[target]: prevState[target] + 1 }));
      };

      const countTotalFeedback = () => Object.values(state).reduce((acc, el) => acc + Number(el), 0);
    
      const countPositiveFeedbackPercentage = () => {
        const total = countTotalFeedback();
        return total ? Number(good * 100) / Number(countTotalFeedback()) : 0;
      };
    
      const totalFeedback = countTotalFeedback();

return (
<FeedbackContext.Provider value={{
    state,
    good,
    neutral,
    bad,
    options,
    countFeedback,
    countTotalFeedback,
    countPositiveFeedbackPercentage,
    totalFeedback
}}> 
{ children }
</FeedbackContext.Provider>
    )
}

export default FeedbackProvider;