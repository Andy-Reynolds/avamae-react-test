import "./LearnMoreSection.scss";
import officeImage from "../../assets/images/shutterstock_696636415.jpg";
import Button from "../Button/Button";

const LearnMoreSection = () => {
  return (
    <div className="learn-more-section">
      <div className="learn-more-section__content">
        <h3 className="learn-more-section__heading">
          Justo petentium te vix, scripta regione urbanitas
        </h3>
        <p className="learn-more-section__paragraph">
          Populo facilisi nam no, dolor deleniti deseruisse ne cum, nam quodsi
          aliquam eligendi ne. Ferri euismod accusata te nec, summo accumsan at
          vix. Ad vix legere impetus, nam consequat reformidans ut. No sit
          consul integre voluptatibus, omnium lucilius ne mel. Et ancillae
          recteque deterruisset sed, ea nec odio option, ferri assum eum et.
        </p>
        <ul className="learn-more-section__list">
          <li className="learn-more-section__list-item">
            Te pri efficiendi assueverit, id molestie suavitate per
          </li>
          <li className="learn-more-section__list-item">
            Te nam dolorem rationibus repudiandae, ne ius falli aliquip
            consetetur
          </li>
          <li className="learn-more-section__list-item">
            Ut qui dicant copiosae interpretaris
          </li>
          <li className="learn-more-section__list-item">
            Ut indoctum patrioque voluptaria duo, ut vis semper abhorreant
          </li>
        </ul>
        <Button buttonLink={"/about"} buttonText={"Learn more"} />
      </div>
      <div className="learn-more-section__image-container">
        <img
          className="learn-more-section__image-container"
          src={officeImage}
          alt=""
        />
      </div>
    </div>
  );
};

export default LearnMoreSection;
