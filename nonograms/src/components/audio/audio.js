/* eslint-disable class-methods-use-this */
import lkmAudio from '../../audio/lkm2.mp3';
import pkmAudio from '../../audio/pkm2.mp3';
import emptyAudio from '../../audio/empty2.mp3';
import winAudio from '../../audio/win2.mp3';
import { createElementWithProperties } from '../../utils/utils';

class AudioHandler {
  constructor() {
    this.audioContainer = createElementWithProperties('div', 'audio');
    this.init();
  }

  init() {
    this.lkmAudio = createElementWithProperties('audio', 'audio_lkm', { src: lkmAudio });
    this.pkmAudio = createElementWithProperties('audio', 'audio_pkm', { src: pkmAudio });
    this.emptyAudio = createElementWithProperties('audio', 'audio_empty', { src: emptyAudio });
    this.winAudio = createElementWithProperties('audio', 'audio_win', { src: winAudio });
    this.audioContainer.append(this.lkmAudio, this.pkmAudio, this.emptyAudio, this.winAudio);
  }

  playAudio(audio) {
    const playedAudio = audio;
    playedAudio.currentTime = 0;
    playedAudio.play();
  }

  toggleMuteAll(bool) {
    this.pkmAudio.muted = bool;
    this.lkmAudio.muted = bool;
    this.emptyAudio.muted = bool;
    this.winAudio.muted = bool;
  }
}

export default AudioHandler;
