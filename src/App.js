import './App.css';
import React, {useState} from 'react';
import EmojiSelector from './EmojiSelector';


function App() {
  const [selecteEmoji, setSelectEmoji] = useState(null);

  const handleEmojiSelect = (emoji) => {
    setSelectEmoji(emoji);
  };

  return (
    <div className='app-container'>
      <h1>Emoji Fun</h1>
      
      {selecteEmoji && (
        <div className='select-emoji-container'>
          <h2>You selected:</h2>
          <p className='select-emoji'  >{selecteEmoji}</p>
        </div>
      )}

    <EmojiSelector onSelect={handleEmojiSelect} />

    </div>
  );
}

export default App;
