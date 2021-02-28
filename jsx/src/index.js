import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetails from './CommentDetail';
import ApprovalCard from './ApprovalCard';
const App = () => {
  return <div className="ui container comments">
    <h3 className="ui dividing header">Comments</h3>
    <div className="ui cards">
      <ApprovalCard>
        <CommentDetails name={faker.name.firstName()} />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetails name={faker.name.firstName()} />
      </ApprovalCard>

    </div>
  </div>;
};
ReactDOM.render(<App />, document.getElementById("root"));