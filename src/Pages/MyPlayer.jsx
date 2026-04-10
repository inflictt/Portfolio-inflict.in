import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import './MyPlayer.css';

export default function MiniPlayer() {
  return (
    <div className="mini-player-wrap">
      <AudioPlayer
        src="/your-song.mp3"
        header={
          <div>
            <div className="now-playing-label">NOW PLAYING</div>
            <div className="track-title">Tu Aake Dekhle</div>
            <div className="track-artist">King</div>
          </div>
        }
        showJumpControls={false}
        showFilledVolume
        customAdditionalControls={[]}
        customVolumeControls={[]}
      />
    </div>
  );
}