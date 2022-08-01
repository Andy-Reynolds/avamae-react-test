import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <hr className="footer__line-break"></hr>
      <p className="footer__paragraph">
        Website Development by{" "}
        <span className="footer__company-name">AVAMAE</span>
      </p>
    </div>
  );
};

export default Footer;
