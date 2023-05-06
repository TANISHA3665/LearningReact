import Namecard from '../Namecard/Namecard';
import './ResultsContainer.css';

const ResultsContainer = ({ suggestedNames }) => {
  const suggestedNameJsx = suggestedNames.map((suggestedName, index) => {
      return <Namecard suggestedName={suggestedName} key={index} />;
  });

  return (
    <div className="result-container">
      {suggestedNameJsx}
    </div>
  );
};

export default ResultsContainer;
