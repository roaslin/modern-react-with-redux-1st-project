import React from 'react';
import ReactDom from 'react-dom';
import CommentDetail from './CommentDetail'
import faker, { fake } from 'faker';

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail avatar={faker.image.avatar()}
                           timeAgo={faker.date.past().toDateString()}
                           commentText={faker.lorem.sentence()}
                           />
        </div>
    );
};


ReactDom.render(<App />, document.querySelector('#root'));