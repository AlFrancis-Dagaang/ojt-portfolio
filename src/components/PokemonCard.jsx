
export default function PokemonCard({ photoName, src }) {
  return (
    <div 
      className="relative group overflow-hidden rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer"
    >
      <div className="p-6">
        <img
          src={src}
          alt={photoName}
          className="w-full h-48 object-contain transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      
      {/* Name overlay that appears on hover */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 translate-y-full opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        <h3 className="text-white text-2xl font-bold text-center">
          {photoName}
        </h3>
      </div>
    </div>
  );
}
