import clsx from 'clsx';

export default function Key({ type, children, calculation, setCalculation }) {
    const handleClick = () => {
        switch (type) {
            case "operation":
                setCalculation(prev => prev + children);
                break;
            case "number":
                setCalculation(prev => calculation[0] === "=" ? `${children}` : prev + children);
                break;
            case "functionality":
                if (children === "=") {
                    const result = new Function(`return ${calculation}`)();
                    setCalculation(`= ${result}`);
                } else if (children === "C") {
                    setCalculation("");
                } else {
                    setCalculation(prev => prev + children);
                }
                break;
            default:
                break;
        }
    };

    const buttonClass = clsx(
        "h-14 m-1 border border-border text-center text-xl font-semibold rounded-xl shadow-md",
        {
            "w-16 bg-white hover:bg-border transition-all duration-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white dark:border-gray-700":
                (type === "number" && children !== 0) || (type === "functionality" && children !== "="),
            "w-[136px] bg-white hover:bg-border transition-all duration-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white dark:border-gray-700":
                children === 0,
            "w-16 ml-0 bg-border hover:bg-gray-300 transition-all duration-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white dark:border-gray-700":
                type === "operation",
            "w-16 bg-black border-0 text-white transition-all duration-200 hover:bg-gray-700 dark:bg-gray-300 dark:text-black dark:hover:bg-gray-400":
                children === "=",
        }
    );

    return (
        <button className={buttonClass} onClick={handleClick}>
            {type === "clear" ? "C" : children}
        </button>
    );
}