import img from './../../assets/img/img.png';
import './Header.css';
const Header = ({ headTitle, headerExpanded }) => {
  return (
    <div className="head-container">
      <img
        className={`head-img ${
          headerExpanded ? `head-img-expanded` : `head-img-contracted`
        }`}
        src={img}
        alt=""
      />
      <h1
        className={`head-text ${
          headerExpanded ? `head-text-expanded` : `head-text-contracted`
        }`}
      >
        {headTitle}
      </h1>
    </div>
  );
};

export default Header;
