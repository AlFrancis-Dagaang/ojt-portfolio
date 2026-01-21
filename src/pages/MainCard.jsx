import starters from "../data/hoenn-starter.json";
import PokemonCard from "../components/PokemonCard";

export default function MainCard() {
  return (
    <div className="flex flex-1 flex-col items-center justify-start   py-6 px-4">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-2 p-2">
          Hoenn Region
        </h1>
        <p className="text-xl md:text-2xl font-semibold text-gray-700">
          Starter Pokémon
        </p>
      </header>

      {/* Cards Container */}
      <div className="flex justify-center items-center gap-6 flex-wrap max-w-full overflow-hidden">
        {starters.hoennStarters.map((pokemon) => (
          <PokemonCard
            key={pokemon.photoName}
            photoName={pokemon.photoName}
            src={pokemon.src}
          />
        ))}
      </div>
    </div>
  );
}
