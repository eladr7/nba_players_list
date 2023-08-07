import { useState } from "react";
import { Player } from "./components/definitions";
import PlayerList from "./components/PlayerList";
import FavoritesList from "./components/FavoritesList";

function App() {
  const [favorites, setFavorites] = useState<Player[]>([]);

  const handleFavorite = (player: Player) => {
    if (!favorites.find((favorite: Player) => favorite.id === player.id)) {
      setFavorites([...favorites, player]);
    } else {
      handleUnfavorite(player);
    }
  };

  const handleUnfavorite = (player: Player) => {
    const updatedFavorites = favorites.filter(
      (favorite: Player) => favorite.id !== player.id
    );
    setFavorites(updatedFavorites);
  };

  return (
    <div className="flex mt-8">
      <div className="w-1/3 ml-10  pr-2 border-r border-gray-300 bg-white rounded-lg shadow-md p-4 mr-20">
        <PlayerList onFavorite={handleFavorite} favorites={favorites} />
      </div>
      <div className=" w-1/3 bg-white rounded-lg shadow-md p-4 ml-20">
        <FavoritesList favorites={favorites} onUnfavorite={handleUnfavorite} />
      </div>
    </div>
  );
}

export default App;
