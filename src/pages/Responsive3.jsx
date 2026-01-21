export default function Responsive3(){

    return(
        <div className="flex  h-full">
            <div className=" w-1/6 h-full bg-blue-300"></div>
            <div className="flex  flex-1 h-full">
                <div className=" w-1/2 h-full flex-col flex">
                    <div className=" flex-1 bg-violet-300">
                    </div>
                    <div className=" h-1/4 w-full bg-lime-200 ">
                        
                    </div>
                </div>
                <div className=" flex-1 w-1/3 h-full flex-col flex">
                    <div className=" h-1/4 w-full bg-red-500">

                    </div>
                    <div className=" flex-1 flex">
                        <div className="w-1/2  bg-yellow-200">
                        </div>
                        <div className="w-1/2  bg-green-400">
                        </div>
                    </div>
                </div>
            </div>

        </div>


    );
}