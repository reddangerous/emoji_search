import React from 'react';
import EmojiPicker from './MyEmojiPicker';
import Footer from './Footer';
import './App.css';
function App() {
  return (
    <div className="App">
      <h1>Emoji Picker</h1>
      <EmojiPicker />
      <div className='Spacer'></div>
      <Footer />
    </div>
  );
}

export default App;


