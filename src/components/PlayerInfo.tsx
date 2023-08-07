import React from "react";
import { Player } from "./definitions";

interface PlayerInfoProps {
  player: Player;
}

export const PlayerInfo: React.FC<PlayerInfoProps> = ({ player }) => {
  return (
    <div className="text-lg text-gray-600">
      {player.first_name} {player.last_name}
    </div>
  );
};
