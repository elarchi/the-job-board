const Header = (props) => {
  console.log(props);
  return (
    <div className="header_div">
      <h1>{props.title}</h1>
    </div>
  );
};
export default Header;
