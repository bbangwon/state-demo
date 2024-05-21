import { useState } from 'react';
import { v4 as uuid } from 'uuid';

function randomEmoji() {
    const emojis = ["😊", "😂", "😍", "🥰", "😎", "😜"];
    return emojis[Math.floor(Math.random() * emojis.length)];
}

export default function EmojiClicker() {
    const [emojis, setEmojis] = useState([{ id: uuid(), emoji: randomEmoji() }]);
    const addEmoji = () => {
        setEmojis((oldEmojis) => [...oldEmojis, { id: uuid(), emoji: randomEmoji() }]);
    }
    const deleteEmoji = (id) => {
        setEmojis((oldEmojis) => oldEmojis.filter((emoji) => emoji.id !== id));
    }

    const makeEverythingAHerat = () => {
        setEmojis((oldEmojis) => oldEmojis.map((emoji) => {
            return {
                ...emoji,
                emoji: "❤️"
            };
        }));
    }
    
    return (
        <div>
            {emojis.map((emoji) => (
                <span onClick={() => deleteEmoji(emoji.id)}
                    style={{ fontSize: "4rem" }}
                    key={emoji.id}>{emoji.emoji}</span>
            ))}
            <button onClick={addEmoji}>Add Emoji</button>
            <button onClick={makeEverythingAHerat}>Make them all hearts</button>
        </div>
    )
}