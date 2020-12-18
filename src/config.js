export const baseType = "data:audio/mpeg;base64,";
export const getCallData = ({ speed, text, languageName }) => JSON.stringify
    ({
        audioConfig: {
            audioEncoding: "MP3",
            speakingRate: speed,
        },
        input: {
            text: text,
        },
        voice: {
            languageCode: "en-US",
            name: languageName,
        },
    });