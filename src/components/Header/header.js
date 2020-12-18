import React from "react";
import {textTransform} from "../../actions/actions";
import {getCallData} from "../../config";


const Header = ({
    text,
    speed,
    languageName,
    setAudioData,
    setPause,
    pause,
    playAudio,
    audioData,
    setLanguageName,
    voices,
    disabled,
    setSpeed
}) => {
    const callData = getCallData({ speed, text, languageName });

    const buttonClick = () => {
        textTransform({ callData, setAudioData });
        text && setPause(!pause);
        audioData && playAudio();
    };

    const selectField = e => {
        setLanguageName(e.target.value);
        setAudioData('');
    };

    return (
        <header>
            <button
                disabled={text.trim().length === 0}
                className="play"
                onClick={buttonClick}
            >
                {pause? 'Stop': 'Play'}
            </button>
            <select
                disabled={disabled}
                className="voicesName"
                onChange={selectField}
            >
                {voices.map((elem, index) =>
                    <option value={elem.name} key={index + "voices"}>
                        {elem.name}
                    </option>
                )}
            </select>
            <select
                disabled={disabled}
                onChange={(e) => {
                    setSpeed(+e.target.value);
                    setAudioData('');
                }}>
                <option value="0.5">Speed 1</option>
                <option value="0.75">Speed 2</option>
                <option value="1">Speed 3</option>
                <option value="1.5">Speed 4</option>
                <option value="2">Speed 5</option>
            </select>
        </header>
    )}

export default Header;