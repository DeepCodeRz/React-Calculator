import React, { useState, useEffect } from "react";
import Key from "./Key";

export default function Screen(props) {
    const [operationText, setOperationText] = useState("");

    useEffect(() => {
        if (props.calculation[0] !== "=") {
            setOperationText(props.calculation);
        }
    }, [props.calculation]);

    return (
        <div className="w-80 h-24 p-4 flex justify-between items-center bg-white border border-border rounded-xl shadow-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700">
            <div className="h-full flex items-end justify-center">
                {props.calculation[0] === "=" ? <p className="text-sm text-left ml-2">{operationText}</p> : null}
            </div>
            <p className="text-5xl font-semibold">{props.calculation}</p>
        </div>
    )
}