import NavbarComp from "./NavbarComp";
const Home: React.FC = () => {
  return (
    <>
      <NavbarComp />
      <h3 className="container">
        This is a basic router page When you click on the links they will
        redirect you to the respective pages.
      </h3>
    </>
  );
};
export default Home;
