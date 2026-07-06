import { useState } from "react";
import { Send } from "lucide-react";

import "../styles/input.css";

export default function PromptInput({
    onSend,
    disabled
}) {

    const [text, setText] = useState("");

    function submit() {

        if (!text.trim()) return;

        onSend(text);

        setText("");
    }

    function handleKeyDown(e) {

        if (e.key === "Enter" && !e.shiftKey) {

            e.preventDefault();

            submit();

        }

    }

    return (

        <div className="prompt-wrapper">

            <div className="prompt-box">

                <textarea
                    rows={1}
                    placeholder="Find Python jobs, ML internships, Remote vacancies..."
                    value={text}
                    disabled={disabled}
                    onChange={(e)=>setText(e.target.value)}
                    onKeyDown={handleKeyDown}
                />

                <button

                    onClick={submit}

                    disabled={disabled}

                >

                    <Send size={18}/>

                </button>

            </div>

        </div>

    );

}