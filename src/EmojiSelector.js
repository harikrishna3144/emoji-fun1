import React from 'react'
import './EmojiSelector.css'

function EmojiSelector({onSelect}) {
    const emojis = ['😄', '🥳', '🎉', '🎈', '🤩', '😎'];

  return (
    <div className='main-container'>
        <h2>Select an Emoji</h2>
        <ul className='emoji-container'>
            {emojis.map((emoji) => (
                <li key={emoji} className='emoji' onClick={() => onSelect(emoji)}>{emoji}</li>
            ))}

        </ul>
    </div>
  )
}

export default EmojiSelector;