export default function Responsive() {
  return (
    <div className="h-screen w-screen overflow-hidden">
      <div className="grid grid-cols-12 grid-rows-[2fr_1fr_1fr] h-full w-full">
        
        <div className="col-span-2 row-span-3 bg-sky-400" />

        <div className="col-span-4 row-span-1 bg-yellow-300" />

        <div className="col-span-4 row-span-1 bg-purple-500" />

        <div className="col-span-2 row-span-1 bg-red-500" />

        <div className="col-span-8 row-span-1 bg-pink-400" />

        <div className="col-span-2 row-span-2 bg-green-400" />

        <div className="col-span-8 row-span-1 bg-cyan-300" />
      </div>
    </div>
  );
}

/*
export default function Responsive() {
  return (
    <div className="h-screen w-screen overflow-hidden flex">
      
      <div className="flex-shrink-0 w-1/9 bg-sky-400" />

      <div className="flex-1 flex flex-col">
        
        <div className="flex h-1/3">
          <div className="flex-1 bg-yellow-300" />
          <div className="flex-1 bg-purple-500" />
          <div className="w-1/6 bg-red-500" />
        </div>

        <div className="flex h-1/3">
          <div className="flex-1 bg-pink-400" />
          <div className="w-1/6 bg-green-400" />
        </div>

        <div className="flex h-1/3">
          <div className="flex-1 bg-cyan-300" />
        </div>
      </div>
    </div>
  );
}
*/