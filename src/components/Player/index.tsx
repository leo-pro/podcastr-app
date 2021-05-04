import { ReactNode, useRef, useEffect, useState } from "react";
import Image from "next/image";
import Slider from "rc-slider";

import { usePlayer } from "../../contexts/PlayerContext";

import {
  Container,
  CurrentEpisode,
  EmptyPlayer,
  BarProgress,
  ControlButtons,
  SliderContainer,
  EmptySlider,
  PlayButton,
} from "./styles";
import { convertDurationToTimeString } from "../../utils/convertDurationToTimeString";
import Head from "next/head";

interface PlayerProps {
  children: ReactNode;
}

function Player() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [progress, setProgress] = useState(0);

  const {
    episodeList,
    currentEpisodeIndex,
    isPlaying,
    togglePlay,
    setPlayingState,
    playNext,
    playPrevious,
    hasNext,
    hasPrevious,
    toggleLoop,
    isLooping,
    toggleShuffle,
    isShuffling,
    clearPlayState,
  } = usePlayer();

  useEffect(() => {
    if (!audioRef.current) {
      return;
    }

    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  const episode = episodeList[currentEpisodeIndex];

  function setupProgressListener() {
    audioRef.current.currentTime = 0;

    audioRef.current.addEventListener("timeupdate", () => {
      setProgress(Math.floor(audioRef.current.currentTime));
    });
  }

  function handleEpisodeEnded() {
    if (hasNext) {
      playNext();
    } else {
      clearPlayState();
    }
  }

  function handleSeek(amount: number) {
    audioRef.current.currentTime = amount;
    setProgress(amount);
  }

  return (
    <Container>
      <Head>
        <title>Podcastr | Home</title>
      </Head>
      <header>
        <img src="/playing.svg" alt="Tocando agora" />
        <strong>Tocando agora</strong>
      </header>

      {episode ? (
        <CurrentEpisode>
          <Image
            width={320}
            height={320}
            src={episode.thumbnail}
            alt={episode.title}
            objectFit="cover"
          />
          <strong>{episode.title}</strong>
          <span>{episode.members}</span>
        </CurrentEpisode>
      ) : (
        <EmptyPlayer>
          <strong>Selecione um podcast para ouvir</strong>
        </EmptyPlayer>
      )}

      <footer className="empty">
        <BarProgress>
          <span>{convertDurationToTimeString(progress)}</span>
          <SliderContainer>
            {episode ? (
              <Slider
                max={episode?.duration}
                value={progress}
                onChange={handleSeek}
                trackStyle={{ backgroundColor: "#04d361" }}
                railStyle={{ backgroundColor: "#9f75ff" }}
                handleStyle={{ backgroundColor: "#04d361", borderWidth: 4 }}
              />
            ) : (
              <EmptySlider />
            )}
          </SliderContainer>
          <span>{convertDurationToTimeString(episode?.duration ?? 0)}</span>
        </BarProgress>

        {episode && (
          <audio
            src={episode.url}
            ref={audioRef}
            autoPlay
            onEnded={handleEpisodeEnded}
            loop={isLooping}
            onPlay={() => setPlayingState(true)}
            onPause={() => setPlayingState(false)}
            onLoadedMetadata={setupProgressListener}
          />
        )}

        <ControlButtons>
          <button
            type="button"
            disabled={!episode || episodeList.length === 1}
            onClick={toggleShuffle}
            className={isShuffling ? "isActive" : ""}
          >
            <img src="/shuffle.svg" alt="Aleatory" />
          </button>
          <button
            type="button"
            disabled={!episode || !hasPrevious}
            onClick={playPrevious}
          >
            <img src="/play-previous.svg" alt="Play previous" />
          </button>
          <PlayButton disabled={!episode} onClick={togglePlay}>
            {isPlaying ? (
              <img src="/pause.svg" alt="Pause" />
            ) : (
              <img src="/play.svg" alt="Play" />
            )}
          </PlayButton>
          <button
            type="button"
            disabled={!episode || !hasNext}
            onClick={playNext}
          >
            <img src="/play-next.svg" alt="Play next" />
          </button>
          <button
            type="button"
            disabled={!episode}
            onClick={toggleLoop}
            className={isLooping ? "isActive" : ""}
          >
            <img src="/repeat.svg" alt="Repeat" />
          </button>
        </ControlButtons>
      </footer>
    </Container>
  );
}

export default Player;
