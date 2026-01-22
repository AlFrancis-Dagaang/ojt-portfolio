export default function Responsive4(){
    return(

        <div className="flex   flex-col">
            <div className=" min-h-screen flex   w-full">
                <div className="flex  flex-col flex-1">

                    <div className="flex-1 border-2 bg-purple-300"></div>
                    <div className="h-1/4   bg-sky-300"></div>
                    <div className="h-1/3  flex">
                        <div className="flex-1  bg-orange-300"></div>
                        <div className="flex-1  bg-red-400"></div>
                    </div>
                </div>
                <div className="flex  h-full w-1/4 bg-lime-300"></div>
            </div>
            <div className=" min-h-screen flex">
                <div className="flex  h-full w-1/4 bg-gray-200"></div>
                <div className="flex-1  h-full w-1/4 flex flex-col">
                    <div className=" flex-1 bg-green-400"></div>
                    <div  className=" h-75 flex">
                        <div className=" flex-1 bg-violet-400"></div>
                        <div className=" flex-1 bg-yellow-300"></div>
                    </div>
                </div>
            </div>
        </div>

    );
}