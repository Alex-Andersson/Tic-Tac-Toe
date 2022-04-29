import PlayerSelectButton from 'components/PlayerSelect/PlayerSelectButton/PlayerSelectButton';

import { MARKS } from 'utilities/constants';

import xIconActive from 'assets/icon-x-active.svg';
import xIcon from 'assets/icon-x-inactive.svg';
import oIconActive from 'assets/icon-o-active.svg';
import oIcon from 'assets/icon-o-inactive.svg';

function PlayerSelector() {
  return (
    <div className="player-selector">
    <div className="player-selector-mark">
      PICK PLAYER 1'S MARK
    </div>
    <div className="player-selector-toggle">
      <PlayerSelectButton
        icon={xIcon}
        iconActive={xIconActive}
        mark={MARKS.X}
      />
      <PlayerSelectButton
        icon={oIcon}
        iconActive={oIconActive}
        mark={MARKS.O}
      />
    </div>
    <div className="player-selector-reminder">
      REMEMBER : X GOES FIRST
    </div>
  </div>
  )
};

export default PlayerSelector;