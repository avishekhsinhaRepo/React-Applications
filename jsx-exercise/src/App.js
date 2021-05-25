import faker from "faker";
import CommentDetail from "./CommentDetail";

function App() {
  return (
    <div className="container">
      <CommentDetail
        avatar={faker.image.avatar()}
        name={faker.name.firstName() + " " + faker.name.lastName()} 
        comment={faker.lorem.sentence()}
      />
      <CommentDetail
        avatar={faker.image.avatar()}
        name={faker.name.firstName() + " " + faker.name.lastName()} 
        comment={faker.lorem.sentence()}
      />
     </div>
   
  );
}

export default App;
