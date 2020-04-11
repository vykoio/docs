import React from "react";
export const Pill = ({ children, color, type }) => (
  <span
    style={{
      backgroundColor: color
        ? color
        : type === "GET"
        ? "#4b7bec"
        : type === "DELETE"
        ? "#ff4757"
        : type === "PATCH"
        ? "#2ed573"
        : "#6c5ce7",
      borderRadius: "5px",
      color: "#fff",
      marginRight: "5px",
      padding: "2px 5px",
    }}
  >
    {type}
  </span>
);
