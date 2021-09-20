
import React, { useState } from "react";
import './App.css';

function App() {
  
  const emojiDictionary = {
    "🍕": "Pizza",
    "🥚": "Egg",
    "🍓": "strawberry",
    "🛴": "Kick scooter",
    "🤐": "zipper mouth face",
    '🥰': "Smiling face with hearts",
    "😎": "Smiling face with sunglasses",
    "😏": "Smirking face",
    "🚗": "Automobile",
    "🎂": "Cake",
    '👀': "Eyes",
    '😫': "tried Face",
    "😭": "loudly crying"
  };
  const emojis = Object.keys(emojiDictionary);

  const [emoji, setEmoji] = useState("")
  const [meaning, setMeaning] = useState("translation will appear here..");

  function changeHandler(event) {
    const inputEmoji = event.target.value;
    setEmoji(inputEmoji);
    if (inputEmoji in emojiDictionary) {
      setMeaning(emojiDictionary[inputEmoji]);
    } else {
      setMeaning("Emoji not found");
    }
  }

  function emojiClickHandler(inputEmoji) {
    setMeaning(emojiDictionary[inputEmoji]);
  }

  return (
    <div className="App">
      <h1 className='title' >Emoji Interpreter App</h1>
      <div className='container'>
      <div class="input_section">
      <input
        onChange={changeHandler}
        value={emoji}
        placeholder={"Search your emoji"}
      />
      </div>
        <div className="result_section">
        <h2 > {emoji} </h2> 
      <h1 className={meaning == "Emoji not found" ? "box errorMsg" : 'box'}> {meaning} </h1>
     </div>
     
      <div className='emojiDiv'>
      { emojis.map((emoji) => (
          <span
            onClick={() => emojiClickHandler(emoji)}
          >
            {emoji}
          </span>
        ))
      }
      </div>
      </div>
     
      <section class="footer">
        <p>hareshkotkar</p>
        <ul>
            <li><a href="https://github.com/harshkotkar5557" alt="#"><i class="fab fa-github">&nbsp;Github</i></a></li>
            <li><a href="https://twitter.com/KotkarHaresh" alt="#"><i class="fab fa-linkedin">&nbsp;LinkedIn</i></a>
            </li>
            <li><a href="https://www.linkedin.com/in/harsh-kotkar-389a08139/" alt="#"><i
                        class="fab fa-twitter">&nbsp;Twitter</i></a></li>
        </ul>
    </section>
    </div>
  );
}

export default App;
