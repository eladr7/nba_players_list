import React, { useState } from "react";
import { Player } from "./definitions";
import { Title } from "./generalComponents/Title";
import { PlayerListItem } from "./PlayerListItem";
import { BackgroundSwitcher } from "./generalComponents/BackgroundSwitcher";

interface FavoritesListProps {
  favorites: Player[];
  onUnfavorite: (player: Player) => void;
}

const FavoritesList: React.FC<FavoritesListProps> = ({
  favorites,
  onUnfavorite,
}) => {
  const [isDark, setIsDark] = useState<boolean>(false);

  return (
    <div className="mr-10">
      <Title text="My Favorites" />
      <div className="mt-2 py-2 my-2 border-b border-gray-300">
        <BackgroundSwitcher isDark={isDark} setIsDark={setIsDark} />
      </div>
      <ul
        className={`rounded p-2 ${
          isDark && favorites.length > 0
            ? "bg-gray-400 text-white"
            : "bg-white text-black"
        }`}
      >
        {favorites.map((player: Player) => (
          <PlayerListItem
            handleClick={() => onUnfavorite(player)}
            isFavorite={true}
            player={player}
            text="Remove From Favorites"
          />
        ))}
      </ul>
    </div>
  );
};

export default FavoritesList;
