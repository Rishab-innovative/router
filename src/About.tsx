import NavbarComp from "./NavbarComp";
const About: React.FC = () => {
  return (
    <>
      <NavbarComp />
      <div className="container">
        <h2>THIS IS About PAGE</h2>
        <h4>Location: NOIDA</h4>
      </div>
    </>
  );
};
export default About;
