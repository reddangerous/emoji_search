import React, { useState } from 'react';
import EmojiPicker from 'emoji-picker-react';

const MyEmojiPicker = ({ onEmojiClick , EmojiStyle}) => {
  const [emoji, setEmoji] = useState(null);
  const [copied, setCopied] = useState(false);
  const [showPicker, setShowPicker] = useState(false);
  

  const handleEmojiClick = (emoji) => {
    setEmoji(emoji);
    onEmojiClick &&onEmojiClick(emoji);
    setCopied(false);
  };

  const handleCopyEmoji = () => {
    if (emoji) {
      navigator.clipboard.writeText(emoji.emoji);
      setCopied(true);
    }
  };

  const handleShowPicker = () => {
    setShowPicker(!showPicker);
  };

 

  return (
    <div className="emoji-picker">
      <button onClick={handleShowPicker} className='button'>
        {showPicker ? 'Hide Emojis' : 'Show Emojis'}
      </button>
      <p>Click emoji to copy it </p>
      <div className="selected-emoji">
        {emoji ? (
          <span onClick={handleCopyEmoji} className='emoji'>{emoji.emoji} {EmojiStyle}</span>
        ) : (
          <span>No emoji chosen</span>
        )}
      </div>
      {copied && <p>Emoji copied!</p>}

      {showPicker && (
        <div className='emojiPicker'>
          <EmojiPicker
            size='2em'
            onEmojiClick={handleEmojiClick}
            disableAutoFocus={true}
          />
        </div>
      )}

      
    </div>
  );
};

export default MyEmojiPicker;
