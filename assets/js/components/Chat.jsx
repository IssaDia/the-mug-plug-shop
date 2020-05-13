import React from 'react';

const Chat = () => {
    return ( <>


    <div className='chat-container'>
        <ul id='messages'>
            <input id='m'></input>
            <button className='btn btn-success button-chat'>send</button>
        </ul>
    </div>
    </> );
}
 
export default Chat;