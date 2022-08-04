import "./Button.scss";
import { Link } from "react-router-dom";

const Button = ({ buttonLink, buttonText }) => {
  return (
    <Link to={buttonLink} className="button-link">
      <button className="button">{buttonText}</button>
    </Link>
  );
};

export default Button;
