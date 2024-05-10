import AudioPlayer from "@/components/AudioPlayerPropsComponent";
import transcriptionData from '@/mock/transcription_data.json'

export default function Home() {

  const audioUrl: string = '/static/TestCall.wav'


  return (

    <section className="text-gray-600 body-font">
      <AudioPlayer audioUrl={audioUrl} transcription={transcriptionData} />
    </section>

  );
}
