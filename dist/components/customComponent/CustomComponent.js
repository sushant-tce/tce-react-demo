import { makeStyles } from "@material-ui/core/styles";
import React from "react";
// Define styles for the component
var useStyles = makeStyles(function () { return ({
    root: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
}); });
var CustomComponent = function (_a) {
    var arrayOfStrings = _a.arrayOfStrings, arrayOfObjects = _a.arrayOfObjects, objectWithProperties = _a.objectWithProperties, anotherProp = _a.anotherProp;
    var classes = useStyles();
    return (React.createElement("div", { className: classes.root },
        React.createElement("div", null,
            React.createElement("h2", null, "Array of Strings:"),
            React.createElement("ul", null, arrayOfStrings.map(function (str, index) { return (React.createElement("li", { key: index }, str)); }))),
        React.createElement("div", null,
            React.createElement("h2", null, "Array of Objects:"),
            React.createElement("ul", null, arrayOfObjects.map(function (obj, index) { return (React.createElement("li", { key: index }, "Name: ".concat(obj.name, ", Age: ").concat(obj.age))); }))),
        React.createElement("div", null,
            React.createElement("h2", null, "Object with Properties:"),
            React.createElement("p", null,
                "User:",
                " ", "".concat(objectWithProperties.user.firstName, " ").concat(objectWithProperties.user.lastName)),
            React.createElement("p", null,
                "Count: ",
                objectWithProperties.count)),
        React.createElement("div", null,
            React.createElement("h2", null, "Another Prop (boolean):"),
            React.createElement("p", null, anotherProp ? "True" : "False"))));
};
export default CustomComponent;
