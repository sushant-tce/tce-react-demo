import React from "react";
interface MyComponentProps {
    arrayOfStrings: string[];
    arrayOfObjects: {
        name: string;
        age: number;
    }[];
    objectWithProperties: {
        user: {
            firstName: string;
            lastName: string;
        };
        count: number;
    };
    anotherProp: boolean;
}
declare const CustomComponent: React.FC<MyComponentProps>;
export default CustomComponent;
