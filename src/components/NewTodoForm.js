import React, { useState } from 'react';

export const NewTodoForm = () => {
    const [inputText, setInputText] = useState('');
 
    return (
        <div>
            <input
                type="text"
                value={inputText}
                onChange={e => setInputText(e.target.value)} />
            <button>Create Todo</button>
        </div>
    )
}