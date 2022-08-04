import "./LogInSection.scss";
import logInImage from "../../assets/images/shutterstock_1302552622.jpg";

const LogInSection = ({ homeObj }) => {
  console.log(homeObj);

  return (
    <div className="log-in-section">
      <div className="log-in-section__content">
        <h3 className="log-in-section__title">
          Nulla sem urna, dictum sed nisi in, viverra rutrum neque
        </h3>
        <p className="log-in-section__paragraph">
          Cras sit amet dapibus magna. Orci varius natoque penatibus et magnis
          dis parturient montes, nascetur ridiculus mus. Donec finibus nulla
          quis lorem mollis lacinia. Fusce ut arcu ligula. Pellentesque augue
          ex, pellentesque ut maximus non, eleifend ut lorem. Vestibulum rutrum
          malesuada turpis, molestie mattis velit maximus ac. Quisque iaculis
          hendrerit ex et tincidunt. Aenean eu magna ut nisi placerat fringilla
          in sed diam.
        </p>
        <button className="log-in-section__button">Log in</button>
      </div>
      <img className="log-in-section__image" src={logInImage} alt="" />
    </div>
  );
};

export default LogInSection;
