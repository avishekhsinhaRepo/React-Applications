const CoreConcept = (props) => {
  const { title, description, image } = props;
  return (
    <li>
      <img src={image} alt="Core Concept" />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
};

export default CoreConcept;