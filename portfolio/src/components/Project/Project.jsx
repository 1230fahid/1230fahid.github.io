const statusConfig = {
    "Completed": {
        color: "text-green-500",
        bg: "bg-green-100 dark:bg-green-900/20"
    },
    "In Progress": {
        color: "text-yellow-600 dark:text-yellow-500",
        bg: "bg-yellow-100 dark:bg-yellow-900/20"
    },
    "Not Yet Started": {
        color: "text-gray-600 dark:text-gray-400",
        bg: "bg-gray-100 dark:bg-gray-800"
    },
    "Paused": {
        color: "text-gray-800 dark:text-gray-200",
        bg: "bg-gray-200 dark:bg-gray-700"
    },
    "Broken": {
        color: "text-red-600 dark:text-red-500",
        bg: "bg-red-100 dark:bg-red-900/20"
    }
};

export default function({name, status, image, description, siteLink, sourceLink, className, number}) {
    const statusStyle = statusConfig[status] || statusConfig["Not Yet Started"];
    
    return(
        <div className={`flex flex-col md:flex-row bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden ${className}`}>
            <div className={`relative w-full md:w-2/5 h-48 md:h-auto bg-gray-200 dark:bg-gray-700 ${number}`}>
                {image && (
                    <img 
                        src={image} 
                        alt={name} 
                        className="w-full h-full object-cover"
                    />
                )}
            </div>
            <div className="flex-1 p-6">
                <div className="space-y-4">
                    <div className="flex justify-between items-start">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{name}</h3>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusStyle.color} ${statusStyle.bg}`}>
                            {status}
                        </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">{description}</p>
                    <div className="flex gap-4">
                        {siteLink && (
                            <a 
                                href={siteLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors"
                            >
                                Visit Site
                            </a>
                        )}
                        {sourceLink && (
                            <a 
                                href={sourceLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-4 py-2 rounded-lg border-2 border-gray-900 dark:border-gray-100 text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                            >
                                View Code
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}


