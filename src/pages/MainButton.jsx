import { useState } from "react";

export default function MainButton() {
  const [total, setTotal] = useState(0);
  const [lastValue, setLastValue] = useState(0);

  const handleClick = (value) => {
    setTotal(prev => prev + value);
    setLastValue(value);
  };

  const clearAll = () => {
    setTotal(0);
    setLastValue(0);
  };

  const renderButton = (value) => (
    <button
      onClick={() => handleClick(value)}
      className="px-6 py-3 m-1 rounded font-bold bg-gray-300 hover:bg-gray-400 text-2xl"
    >
      {value}
    </button>
  );

  const totalButtonColor =
    lastValue > 0
      ? "bg-green-500"
      : lastValue < 0
      ? "bg-red-500"
      : "bg-gray-800";

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="flex flex-wrap justify-center items-center max-w-full">
        {[-10, -5, -4, -3, -2, -1].map(renderButton)}

        {/* Total / Answer Button */}
        <div
          className={`mx-2 px-12 py-6 rounded text-white font-bold text-3xl ${totalButtonColor}`}
        >
          {total}
        </div>

        {[1, 2, 3, 4, 5, 10].map(renderButton)}
      </div>

      {/* Clear button aligned with total button */}
      <div className="flex justify-center mt-10 ml-14">
        <button
          onClick={clearAll}
          className="px-8 py-4 bg-white text-black font-bold rounded border-2 border-black hover:bg-black hover:text-white hover:border-white transition-colors duration-300"
        >
          Clear
        </button>
      </div>

    </div>
  );
}
