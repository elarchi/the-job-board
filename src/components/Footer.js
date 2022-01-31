const Footer = (props) => {
  console.log(props);
  return (
    <div className="footer_div">
      <p>{props.content}</p>
    </div>
  );
};
export default Footer;
