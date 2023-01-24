import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types'

export const StatsContext = createContext();

export const useStats = () => useContext(StatsContext);

export const StatsProvider = ({ children }) => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const addGood = () => setGood(good + 1);
  const addNeutral = () => setNeutral(neutral + 1);
  const addBad = () => setBad(bad + 1);

  return (
    <StatsContext.Provider
      value={{ good, neutral, bad, addGood, addNeutral, addBad }}
    >
      {children}
    </StatsContext.Provider>
  );
};

StatsProvider.propTypes = {
  children: PropTypes.node
}