import img from './../../assets/img/img.png';
import './Header.css'
const Header = () => {
  return (
    <div className="head-container">
      <img className="head-img" src={img} alt="" />
      <h1 className="head-text">NameBrewer</h1>
    </div>
  );
};

export default Header;
