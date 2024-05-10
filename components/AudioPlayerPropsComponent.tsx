'use client'
import { useRef } from "react";
import { TranscriptionItem } from "@/interfaces/TranscriptionItem";

interface AudioPlayerProps {
    audioUrl: string;
    transcription: TranscriptionItem[];
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ audioUrl, transcription }) => {
    const audioRef = useRef<HTMLAudioElement>(null);

    const handleClickTranscription = (start: number): void => {
        if (audioRef.current) {
            audioRef.current.currentTime = start;
            audioRef.current.play();
        }
    }

    const playAudio = () => {
        if (audioRef.current) {
            audioRef.current.play();
        }
    };

    const pauseAudio = () => {
        if (audioRef.current) {
            audioRef.current.pause();
        }
    };

    const stopAudio = () => {
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        }
    };

    return (
        <div className="flex flex-col center px-5 py-24 gap-7">
            <div className="flex  justify-around">
                <audio ref={audioRef} src={audioUrl}></audio>
                <button onClick={playAudio}>Play</button>
                <button onClick={pauseAudio}>Pause</button>
                <button onClick={stopAudio}>Stop</button>
            </div>
            
            <div className="flex justify-center mx-auto items-center max-w-3xl">
                <div className="  ">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Transcription</h1>
                    {transcription.map((item, index) => (
                        <div key={index} onClick={() => handleClickTranscription(item.start)}
                            className={item.role === 'agent' ? 'text-green-600 cursor-pointer' : 'text-blue-600 cursor-pointer'}>
                            {item.content}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AudioPlayer;