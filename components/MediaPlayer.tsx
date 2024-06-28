import React, { useState, useEffect } from "react";
import { Text, View, Button } from "react-native";
import TrackPlayer from "react-native-track-player";
import STATE_PAUSED from "react-native-track-player";
import STATE_PLAYING from "react-native-track-player";
import TrackPlayerEvents from "react-native-track-player";

const MediaPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    async function setup() {
      await TrackPlayer.setupPlayer();
      await TrackPlayer.add({
        id: "track1",
        url: require("./../assets/mp3/ChorSong.mp3"),
        title: "Song Title",
        artist: "Artist Name",
      });

      TrackPlayer.addEventListener(
        TrackPlayerEvents.PLAYBACK_STATE,
        ({ state }: { state: any }) => {
          if (state === STATE_PLAYING) {
            setIsPlaying(true);
          } else if (state === STATE_PAUSED) {
            setIsPlaying(false);
          }
        }
      );
    }

    setup();

    // return () => {
    //   TrackPlayer.destroy();
    // };
  }, []);

  const togglePlayback = async () => {
    if (isPlaying) {
      await TrackPlayer.pause();
    } else {
      await TrackPlayer.play();
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Track Player Example</Text>
      <Button title={isPlaying ? "Pause" : "Play"} onPress={togglePlayback} />
    </View>
  );
};

export default MediaPlayer;
