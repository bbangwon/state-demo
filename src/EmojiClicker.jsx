
import {useState} from 'react';
export default function EmojiClicker() {
    const [emojis, setEmojis] = useState(["😊"]);
    const addEmoji = () => {
        setEmojis((oldEmojis) => [...oldEmojis, "😊"]);
    }
    return (
        <div>
            {emojis.map((emoji, idx) => (
            <span style={{fontSize: "4rem" }} key={idx}>{emoji}</span>
            ))}
            <button onClick={addEmoji}>Add Emoji</button>
        </div>
    )
}