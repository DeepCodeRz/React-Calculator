import clsx from 'clsx';

export default function Key(props) {
    function handleClick() {
        if (props.type === "clear") {
            props.setCalculation("")
            console.log(props.calculation)
        } else if (props.type === "operation") {
            props.setCalculation((prev) => prev + props.children)
            console.log(props.calculation)
        } else if (props.type === "number") {
            if (props.calculation[0] === "=") {
                props.setCalculation(`${props.children}`)
            } else {
                props.setCalculation((prev) => prev + props.children)
            }
        } else if (props.type === "result") {
            const result = new Function(`return ${props.calculation}`)()
            props.setCalculation(`= ${result}`)
        }
    }

    return (
        <button
            className={clsx("h-14 m-1 border border-border text-center text-xl font-semibold rounded-xl shadow-md transition-all duration-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white dark:border-gray-700", {
                "w-16 m-1 bg-white hover:bg-border" : (props.type === "number" && props.children !== "0") ,
                "w-[136px] bg-white hover:bg-border" : props.children === 0,
                "w-16 ml-0 bg-border hover:bg-gray-300" : props.type === "operation",
                "w-1/2 bg-black text-white hover:bg-gray-800 dark:bg-gray-300 dark:text-black dark:hover:bg-gray-400" : props.type === "result",
                "w-1/2 ml-0 bg-white hover:bg-border" : props.type === "clear",
            })}
            onClick={handleClick}>
            {props.type === "clear" ? "C" : props.children}
        </button>
    )
}