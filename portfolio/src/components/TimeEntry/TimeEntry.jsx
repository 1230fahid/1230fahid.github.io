export default function TimeEntry({className, imageAddress, startDate, description}) {
    return(
        <div className={`flex flex-col items-center w-fit h-fit ${className === 'even' ? '-mb-[215px]' : 'rotate-180'}`}>
            <div 
                className="w-[100px] h-[100px] rounded-full p-0.5 border border-white dark:border-gray-200 z-10 bg-cover"
                style={{
                    backgroundImage: `url("${imageAddress}")`
                }}
            />
            <div className="h-[120px] w-1 bg-white dark:bg-gray-200" />
        </div>
    );
}