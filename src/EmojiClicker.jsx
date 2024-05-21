import {useState} from 'react';
import { v4 as uuid } from 'uuid';
export default function EmojiClicker() {
    const [emojis, setEmojis] = useState([{ id: uuid(), emoji: "😊"}]);
    const addEmoji = () => {
        setEmojis((oldEmojis) => [...oldEmojis, { id: uuid(), emoji: "😊"}]);
    }
    return (
        <div>
            {emojis.map((emoji) => (
            <span style={{fontSize: "4rem" }} key={emoji.id}>{emoji.emoji}</span>
            ))}
            <button onClick={addEmoji}>Add Emoji</button>
        </div>
    )
}