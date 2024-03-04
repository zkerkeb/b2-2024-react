import { useEffect, useRef, useState } from "react";
import { MdOutlinePauseCircleFilled, MdOutlinePlayCircleFilled, MdOutlineRepeat, MdOutlineShuffle, MdOutlineSkipNext, MdOutlineSkipPrevious } from "react-icons/md";
import styled from 'styled-components';
import zik from '../../assets/audio/zik.mp3';

function fancyTimeFormat(duration) {
    // Hours, minutes and seconds
    const hrs = ~~(duration / 3600);
    const mins = ~~((duration % 3600) / 60);
    const secs = ~~duration % 60;
  
    // Output like "1:01" or "4:03:59" or "123:03:59"
    let ret = "";
  
    if (hrs > 0) {
      ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    }
  
    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;
  
    return ret;
}


const Player = () => {
    const [paused, setPaused] = useState(true);
    const [progress, setProgress] = useState(0);
    const audioRef = useRef();

    useEffect(() => {
        if (!audioRef?.current) return;
        audioRef.current.addEventListener('timeupdate', () => {
            setProgress((audioRef.current.currentTime / audioRef.current.duration) * 100);
        });
    }
    , []);

    const handlePlay = () => {
        audioRef.current.play();
        setPaused(false);
    }

    const handlePause = () => {
        audioRef.current.pause();
        setPaused(true);
    }



    return (
            <Container>
                <RedDot></RedDot>
                <TopContainer>
                <MdOutlineShuffle size={30} color="white" />
                <MdOutlineSkipPrevious size={30} color="white" />
                { paused ?
                      <MdOutlinePlayCircleFilled onClick={handlePlay} size={30} color="white" />
                      :
                <MdOutlinePauseCircleFilled 
                onClick={handlePause}
                size={30} color="white" />
                }
          
                <MdOutlineSkipNext size={30} color="white" />
                <MdOutlineRepeat size={30} color="white" />
                </TopContainer>
                <BottomContainer>
                    <span
                        style={{
                            color: "white",
                            fontSize: 10
                        
                        }}
                    >
                        {fancyTimeFormat(audioRef.current?.currentTime)}
                    </span>
                        <ProgressBarContainer>
                            <ProgressBar progress={progress} ></ProgressBar>
                        </ProgressBarContainer>
                        <span
                        style={{
                            color: "white",
                            fontSize: 10
                        
                        }}
                    >{fancyTimeFormat(audioRef.current?.duration)}</span>

                </BottomContainer>
            
                <audio
                    ref={audioRef}
                > 
                    <source src={zik} type="audio/mpeg"/>
                    Your browser does not support the audio element.
                </audio>
            </Container>
    );
}

const RedDot = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    position: absolute;
    top: -10px;
    right: -10px;
`

const ProgressBar = styled.div`
    width: ${props => props.progress}%;
    height: 5px;
    border-radius: 4px; 
    background-color: #ffffff;
`

const ProgressBarContainer = styled.div`
    width: 300px;
    background-color: #ffffff50;
    height: 5px;   
    margin: 2px 6px 0 6px;
    border-radius: 4px;

`   

const TopContainer = styled.div`
    display: flex;
    justify-content: center;
`

const BottomContainer = styled.div`
    display: flex;
    align-items: center;
`


const Container = styled.div`
    position:relative;
    background-color: black;
    max-width: 350px;
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 20px 12px 12px 12px;
    border-radius: 4px;
`

export default Player;