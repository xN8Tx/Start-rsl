import React from 'react';

import PlayerPlayer from '../player-player/PlayerPlayer';
import PlayerDescription from '../player-description/PlayerDescription';

export default function Player() {
  return (
    <div className="w-100 df-column df-start i-gap">
      <PlayerPlayer />
      <PlayerDescription />
    </div>
  );
}
