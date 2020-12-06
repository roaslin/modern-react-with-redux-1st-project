import React from 'react';
import ReactDom from 'react-dom';
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCArd'
import faker from 'faker';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail 
                avatar={faker.image.avatar()}
                timeAgo={faker.date.past().toDateString()}
                comment={faker.lorem.sentence()}
                />
            </ApprovalCard>
            <ApprovalCard>
            <CommentDetail 
              avatar={faker.image.avatar()}
              timeAgo={faker.date.past().toDateString()}
              comment={faker.lorem.sentence()}
              />
            </ApprovalCard>
            <ApprovalCard>
            <CommentDetail 
              avatar={faker.image.avatar()}
              timeAgo={faker.date.past().toDateString()}
              comment={faker.lorem.sentence()}
              />
            </ApprovalCard>
            <ApprovalCard>
            <CommentDetail 
              avatar={faker.image.avatar()}
              timeAgo={faker.date.past().toDateString()}
              comment={faker.lorem.sentence()}
              />
            </ApprovalCard>
        </div>
    );
};


ReactDom.render(<App />, document.querySelector('#root'));