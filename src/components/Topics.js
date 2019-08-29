import React from 'react';
import TopicBox from './TopicBox';

function Topics() {
    return (
        <div>
            <h3 className='trending-title'>Trending Topics</h3>
            <TopicBox title="word" />
        </div>
    );
}

export default Topics;