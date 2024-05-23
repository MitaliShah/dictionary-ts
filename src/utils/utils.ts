export type Item = {
    text: string;
    audio: string;
    // Add other properties if needed
  };

    export const findTextAndAudio = (array: Item[]): { text: string | null; audio: string | null } => {
    let text: string | null = null;
    let audio: string | null = null;

    for (const item of array) {
        if (item.text) {
        text = item.text;
        }
        if (item.audio) {
        audio = item.audio;
        }  
        
        if (text && audio) {
        break;
        }
    }

    return { text, audio };
    }; 