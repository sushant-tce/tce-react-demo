import { makeStyles } from "@material-ui/core/styles";
import React from "react";

// Define the prop types
interface MyComponentProps {
  arrayOfStrings: string[];
  arrayOfObjects: { name: string; age: number }[];
  objectWithProperties: {
    user: { firstName: string; lastName: string };
    count: number;
  };
  anotherProp: boolean;
}

// Define styles for the component
const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const CustomComponent: React.FC<MyComponentProps> = ({
  arrayOfStrings,
  arrayOfObjects,
  objectWithProperties,
  anotherProp,
}: MyComponentProps) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        <h2>Array of Strings:</h2>
        <ul>
          {arrayOfStrings.map((str, index) => (
            <li key={index}>{str}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Array of Objects:</h2>
        <ul>
          {arrayOfObjects.map((obj, index) => (
            <li key={index}>{`Name: ${obj.name}, Age: ${obj.age}`}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Object with Properties:</h2>
        <p>
          User:{" "}
          {`${objectWithProperties.user.firstName} ${objectWithProperties.user.lastName}`}
        </p>
        <p>Count: {objectWithProperties.count}</p>
      </div>
      <div>
        <h2>Another Prop (boolean):</h2>
        <p>{anotherProp ? "True" : "False"}</p>
      </div>
    </div>
  );
};

export default CustomComponent;
