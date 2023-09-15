import React from "react";
import { Button } from "@material-ui/core";
var CustomButton = function (_a) {
    var label = _a.label, onClick = _a.onClick;
    return (React.createElement(Button, { variant: "contained", color: "primary", onClick: onClick }, label));
};
export default CustomButton;
