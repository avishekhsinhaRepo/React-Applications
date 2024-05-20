import reactImage from '../assets/react-core-concepts.png'
const Header = () => {
  return (
    <header>
      <img src={reactImage} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>Fundamental React concepts you will need for almost any app you are going to build!</p>
    </header>
  );
};

export default Header;