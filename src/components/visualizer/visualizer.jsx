
import { useRef, useState } from "react";
import m from "../../assets/songs/Dèf Fondamantal - Dèf Note (Odyo Ofisyèl)(M4A_128K).mp3"
// import "./styles.css";
import WaveForm from "./WaveForm";
import { useDataContext } from "../dataProvider/context";
function Visualizer({s}) {
    const {
        audioElement,
        playingSong,
        cover,
        title,
        basename,
        onEnded,
        localisation,
        id,
        isLike,
        isPlaying
      } = useDataContext();
    const [audioUrl, setAudioUrl] = useState(m);
  const [analyzerData, setAnalyzerData] = useState(null);
 
  
  // audioAnalyzer function analyzes the audio and sets the analyzerData state
  const audioAnalyzer = () => {
    // create a new AudioContext
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    // create an analyzer node with a buffer size of 2048
    const analyzer = audioCtx.createAnalyser();
    analyzer.fftSize = 2048;

    const bufferLength = analyzer.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    const source = audioCtx.createMediaElementSource(audioElement.current);
    source.connect(analyzer);
    source.connect(audioCtx.destination);
    source.onended = () => {
      source.disconnect();
    };

    // set the analyzerData state with the analyzer, bufferLength, and dataArray
    setAnalyzerData({ analyzer, bufferLength, dataArray });
  };

  // onFileChange function handles the file input and triggers the audio analysis
  const onFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setAudioUrl(m);
    alert(m)
    audioAnalyzer();
   
  };
  
//   if(playingSong){
//     setAudioUrl(playingSong);
    
//   }

  return (
    <div className="App">
      <h1>Audio Visualizer</h1>
      {analyzerData && <WaveForm analyzerData={analyzerData} />}
      <div
        style={{
          height: 80,
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center"
        }}
      >
        <input type="file" accept="audio/*" onChange={onFileChange} />
        {/* <audio src={audioUrl ?? ""} controls ref={audioElmRef} /> */}
        <audio
        src={playingSong ? playingSong : s}
        ref={audioElement}
        preload="auto"
        onEnded={onEnded}
      ></audio>
      </div>
    </div>
  );
}

export default Visualizer;
