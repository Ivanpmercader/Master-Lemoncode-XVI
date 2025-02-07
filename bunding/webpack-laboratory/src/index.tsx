import React from "react";
import { createRoot } from "react-dom/client";
import { HelloComponent } from "@components/hello/helloComponent";
import "./styles.scss";

const root = createRoot(document.getElementById("root"));
root.render(
    <HelloComponent />
);