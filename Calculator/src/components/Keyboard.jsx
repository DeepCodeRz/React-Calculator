import Key from "./Key";
import React from "react";

export default function Keyboard(props) {
    const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, "."];
    const operations = ["+", "-", "*", "/"];
    const functionalities = ["(",")", "C", "="];

    const numberKeys = numbers.map(number => {
        return <Key key={number} type="number" calculation={props.calculation}
                    setCalculation={props.setCalculation}>{number}</Key>;
    });

    const operationsKeys = operations.map(operation => {
        return <Key key={operation} type="operation" calculation={props.calculation}
                    setCalculation={props.setCalculation}>{operation}</Key>;
    });

    const functionalitiesKeys = functionalities.map(functionality => {
        return <Key key={functionality} type="functionality" calculation={props.calculation}
                    setCalculation={props.setCalculation}>{functionality}</Key>;
    });


    return (
        <div className="w-80 p-4 flex-col justify-center items-center border border-border rounded-xl shadow-md dark:bg-gray-800 dark:text-gray-300 dark:hover:text-white dark:border-gray-700">
            <div className="flex justify-center items-center">
                {functionalitiesKeys}
            </div>
            <div className="flex justify-center items-center">
                <div className="flex flex-col">
                    <div className="">
                        {numberKeys}
                    </div>
                </div>
                <div className="flex flex-col h-full">
                    {operationsKeys}
                </div>
            </div>
        </div>
    );
}