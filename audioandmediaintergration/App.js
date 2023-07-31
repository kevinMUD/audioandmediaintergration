import React, { useState } from 'react';
import { View, Button } from 'react-native';
//import Sound from 'react-native-sound';

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const audioFile = require('./assets/Everyday Lord.mp3');

  const playAudio = () => {
    const sound = new Sound(audioFile, Sound.MAIN_BUNDLE, error => {
      if (error) {
        console.log('Error loading sound:', error);
        return;
      }
      sound.play(success => {
        if (success) {
          console.log('Sound played successfully');
        } else {
          console.log('Playback failed');
        }
      });
    });
  };

  return (
    <View>
      <Button title={isPlaying ? 'Pause' : 'Play'} onPress={playAudio} />
    </View>
  );
};

export default AudioPlayer;
