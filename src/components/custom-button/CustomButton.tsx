import React from "react";
import { Button } from "@material-ui/core";

interface CustomButtonProps {
  label: string;
  onClick: () => void;
}

export default function CustomButton({ label, onClick }: CustomButtonProps) {
  return (
    <Button variant="contained" color="primary" onClick={onClick}>
      {label}
    </Button>
  );
}
