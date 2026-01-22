export default function Responsive5() {
  return (
    <div className="h-screen w-screen overflow-hidden flex">
      <div className="flex-1 flex flex-col lg:flex-row ">
        {/*1*/}
        <div className="flex  flex-1 flex-row-reverse lg:flex-row">
            <div className="w-16 bg-lime-400"></div>
            <div className=" flex-1 flex flex-col"> 
                <div className=" flex-1  bg-violet-400"></div>
                <div className=" h-1/4  bg-sky-300"></div>
                <div className=" h-1/4 flex">
                    <div className=" flex-1 bg-orange-300"></div>
                <div className=" flex-1 bg-red-400"></div>
                </div>
            </div>
        </div>

        {/*2*/}
        <div className="flex flex-1 flex-row-reverse lg:flex-row">
            <div className=" flex-1 flex-col flex"> 
                <div className=" flex-1  bg-green-400"></div>
                <div className=" flex-1 flex" >
                    <div className=" flex-1 bg-violet-400"></div>
                    <div className=" flex-1 bg-yellow-300"></div>
                </div>
            </div>
            <div className="w-20 bg-gray-300"></div>
        </div>

      </div>
    </div>
  );
}
