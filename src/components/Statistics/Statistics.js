import css from './Statistics.module.css';
import { useStats } from 'context/StatsContext';

const Statistics = () => {

const {good, neutral, bad} = useStats();

const countTotalFeedback = () => {
  return good + neutral + bad;
};

const total = countTotalFeedback();

const countPositiveFeedbackPercentage = () => {
  
  return ((good / total) * 100).toFixed();
};

const positivePercentage = countPositiveFeedbackPercentage() + "%"



  return (
    <ul className={css.list}>
      <li className={css.stat}>
        Good: <span className={css.number}>{good}</span>
      </li>
      <li className={css.stat}>
        Neutral: <span className={css.number}>{neutral}</span>
      </li>
      <li className={css.stat}>
        Bad: <span className={css.number}>{bad}</span>
      </li>
      <li className={css.stat}>
        Total: <span className={css.number}>{total}</span>
      </li>
      <li className={css.stat}>
        Positive Feedback:{' '}
        <span className={css.number}>{positivePercentage}</span>
      </li>
    </ul>
  );
};




export default Statistics;
