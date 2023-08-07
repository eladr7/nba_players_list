import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Player } from "./definitions";
import { Title } from "./generalComponents/Title";
import { PlayerListItem } from "./PlayerListItem";

interface PlayerListProps {
  onFavorite: (player: Player) => void;
  favorites: Player[];
}

const PlayerList: React.FC<PlayerListProps> = ({ onFavorite, favorites }) => {
  const [players, setPlayers] = useState<Player[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    axios
      .get("https://www.balldontlie.io/api/v1/players")
      .then((response) => {
        setPlayers(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching players: ", error);
      });

    inputRef.current?.focus();
  }, []);

  const handleFavorite = (player: Player) => {
    onFavorite(player);
    inputRef.current?.focus();
  };

  const filteredPlayers: Player[] = players.filter((player: Player) =>
    `${player.first_name} ${player.last_name}`
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  return (
    <div className="mr-20">
      <Title text="NBA Players" />
      <input
        type="text"
        placeholder="Search by player's name"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        ref={inputRef}
        className="border border-gray-300 rounded-lg py-2 px-2 -mx-1 mt-6 mb-2 focus:outline-none focus:border-blue-500"
      />
      <ul>
        {filteredPlayers.map((player: Player) => {
          const isFavorite: boolean = favorites.some(
            (favorite: Player) => favorite.id === player.id
          );
          return (
            <PlayerListItem
              handleClick={() => handleFavorite(player)}
              isFavorite={isFavorite}
              player={player}
              text={isFavorite ? "Unfavorite" : "Add To Favorites"}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default PlayerList;
