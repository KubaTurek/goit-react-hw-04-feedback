import '../index.css';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import NotificationMessage from './Notification/Notification';
import { useStats } from '../context/StatsContext';

const App = () => {
  const { good, neutral, bad } = useStats();

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  return (
    <div className={'app'}>
      <Section tittle="Please Leave Feedback">
        <FeedbackOptions />
      </Section>
      <Section tittle="Statistics">
        {countTotalFeedback() === 0 ? (
          <NotificationMessage />
        ) : (
          <Statistics />
        )}
      </Section>
    </div>
  );
};

export default App;
