import React from "react";
import { PlayerInfo } from "./PlayerInfo";
import ToggleButton from "./generalComponents/ToggleButton";
import { Player } from "./definitions";

interface PlayerListItemProps {
  player: Player;
  isFavorite: boolean;
  handleClick: (player: Player) => void;
  text: string;
}

export const PlayerListItem: React.FC<PlayerListItemProps> = ({
  player,
  isFavorite,
  handleClick,
  text,
}) => {
  return (
    <li key={player.id} className="flex justify-between my-1">
      <PlayerInfo player={player} />
      <ToggleButton
        onClick={() => handleClick(player)}
        isPressed={isFavorite}
        text={text}
      />
    </li>
  );
};
