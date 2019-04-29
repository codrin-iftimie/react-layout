import React from "react";
import { createLayout, Slot } from "./Layout";

export function Example() {
  return (
    <>
      <p>
        <Slot name="default">Render something as a default</Slot>
      </p>
      <p>
        <Slot name="overwriteDefault">This will be overwritten</Slot>
      </p>
      <Slot name="fill" />
    </>
  );
}

export default createLayout(Example);
