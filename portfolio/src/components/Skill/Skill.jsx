export default function Skill({name, confidence}) {
    return(
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 transition-transform hover:scale-105">
            <div className="flex justify-between items-center mb-2">
                <h4 className="text-lg font-medium text-gray-900 dark:text-white">{name}</h4>
                <div className="relative">
                    <div className="bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 px-2 py-1 rounded text-sm">
                        {confidence}%
                    </div>
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0 
                        border-l-[6px] border-l-transparent
                        border-r-[6px] border-r-transparent
                        border-t-[6px] border-gray-900 dark:border-gray-100">
                    </div>
                </div>
            </div>
            <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div 
                    className="h-full bg-blue-600 dark:bg-blue-400 rounded-full transition-all duration-500 ease-out"
                    style={{
                        width: `${confidence}%`
                    }}
                >
                </div>
            </div>
        </div>
    );
}
