import css from './FeedbackOptions.module.css';
import { useStats } from '../../context/StatsContext';

const FeedbackOptions = () => {
  const { good, neutral, bad, addGood, addNeutral, addBad } = useStats();

  return (
    <div className={css.feedbackOptions}>
      <button
        className={css.button}
        type="button"
        name={good}
        key="1"
        onClick={() => addGood()}
      >
        good
      </button>
      <button
        className={css.button}
        type="button"
        name={neutral}
        key="2"
        onClick={() => addNeutral()}
      >
        neutral
      </button>
      <button
        className={css.button}
        type="button"
        name={bad}
        key="3"
        onClick={() => addBad()}
      >
        bad
      </button>
    </div>
  );
};

export default FeedbackOptions;
