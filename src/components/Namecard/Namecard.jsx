import './Namecard.css';

const Namecard = ({ suggestedName }) =>
{
    const nameCheapurl = "https://www.namecheap.com/domains/registration/results/?domain=" + suggestedName;

  return (
    <a className="link" href={nameCheapurl} target="_blank" rel="noreferrer">
      <div className="result-name-card">
        <p className="result-name">{suggestedName}</p>
      </div>
    </a>
  );
};

export default Namecard;
