import React, { useEffect, useState } from "react";
import { getVoices } from "../../actions/actions";
import { baseType } from "../../config";

import Header from "../Header/header";
import "./style.sass";

const Voice = () => {
    const audioRef = React.useRef();
    const [voices, setVoices] = useState([]);
    const [audioData, setAudioData] = useState("");
    const [text, setText] = useState("");
    const [languageName, setLanguageName] = useState("en-US-Wavenet-G");
    const [speed, setSpeed] = useState(0.5);
    const [pause, setPause] = useState(false);
    const [disabled, setDisabled] = useState(false);

    useEffect(() => getVoices(setVoices), []);

    const playAudio = () => {
        if(pause)
            audioRef.current.pause();
        else
            audioRef.current.play();
    };

    return (
        <div className="main">
            <Header
                languageName={languageName}
                speed={speed}
                text={text}
                setAudioData={setAudioData}
                setPause={setPause}
                pause={pause}
                playAudio={playAudio}
                audioData={audioData}
                setLanguageName={setLanguageName}
                voices={voices}
                disabled={disabled}
                setSpeed={setSpeed}
            />
            <div className="textContainer">
                <textarea
                    disabled={disabled}
                    cols='50'
                    rows='10'
                    className="text"
                    placeholder="введите текст"
                    value={text}
                    onChange={(e) => {
                        setText(e.target.value);
                        e.target.value.length===0 && setAudioData('');
                        e.target.value.length !== text.length && setAudioData('');
                    }}
                >
                </textarea>
                {audioData.length !== 0 ? (
                    <audio
                        ref={audioRef}
                        id='play'
                        className="audio"
                        autoPlay
                        onPlay={() => setDisabled(true)}
                        onEnded={() => {
                            setPause(false);
                            setDisabled(false);
                        }}
                    >
                        <source src={baseType + audioData} type="audio/mpeg" />
                    </audio>
                ) : (
                    ""
                )}
            </div>
        </div>
    );
}

export default Voice;
