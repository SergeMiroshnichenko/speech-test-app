export const getVoices = setVoices => {
    fetch("https://texttospeech.googleapis.com/v1beta1/voices", {
        headers: {
            "X-Goog-Api-Key": "AIzaSyBUrG7YyqBHH-TcgwACamVt3mlNU2u5dR4"
        },
    })
        .then((response) => response.json())
        .then((data) =>
            setVoices(data.voices.filter((e) => e.languageCodes[0] === "en-US"))
        );
};

export const textTransform = ({ callData, setAudioData }) => {
    fetch("https://texttospeech.googleapis.com/v1beta1/text:synthesize", {
        method: "POST",
        headers: {
            "X-Goog-Api-Key": "AIzaSyBUrG7YyqBHH-TcgwACamVt3mlNU2u5dR4",
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
        body: callData,
    })
        .then((response) => response.json())
        .then((result) => setAudioData(result.audioContent))
        .catch((error) => console.error(error));
}

