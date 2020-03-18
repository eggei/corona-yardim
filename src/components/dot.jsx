import React from "react"
import { number as n, string as s, node } from "prop-types"

export const Dot = ({ size, color, children }) => (
  <div style={{ display: "flex", margin: "8px 0" }}>
    <span
      style={{
        borderRadius: "100%",
        height: size,
        width: size,
        backgroundColor: color,
        display: "inline-block",
        margin: "0 8px 0 8px",
      }}
    ></span>
    <p style={{ margin: 0 }}>{children}</p>
  </div>
)

Dot.propTypes = {
  size: n,
  color: s,
  children: node.isRequired,
}

Dot.defaultProps = {
  size: 20,
  color: "black",
}
