import React from 'react';

function TopicBox(props) {
    return (
        <div className='topic-box'>
            <p className='topic-title'>Most beautiful {<span className='topic-subject'>{props.title}</span>}</p>
        </div>
    );
}

export default TopicBox;