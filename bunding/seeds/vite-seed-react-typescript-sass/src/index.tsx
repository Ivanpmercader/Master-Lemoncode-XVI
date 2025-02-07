// import "./styles.scss";

import { createRoot } from "react-dom/client";
import { HelloComponent } from "./components/hello/helloComponent";

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(<HelloComponent />);