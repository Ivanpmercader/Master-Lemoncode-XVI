import React from "react";
import { createRoot } from "react-dom/client";
import { AverageComponent } from "@components/averageComponent";
import "./styles.scss";

const root = createRoot(document.getElementById("root"));
root.render(
    <main>
        <AverageComponent />
    </main>
);