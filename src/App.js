import "./App.css";
import Feedback from "./Components/Feedback/Feedback.jsx";
import { useContext } from "react";
import Statistics from "./Components/statistics/Statistics";
import Section from "./Components/Section/Section";
import {FeedbackContext} from './Components/Context/Context'
const App = () => {
  const {totalFeedback} = useContext(FeedbackContext)

  return (
    <Section title="please leave your feedback">
      <Feedback />
      {totalFeedback ? (
        <Statistics  />
      ) : (
        <Section title={"There is no feedback"} />
      )}
    </Section>
  );
};

export default App;