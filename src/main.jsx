import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import Root from "./componets/Root";

const domNode = document.getElementById("root");
const root = createRoot(domNode);

root.render(<Root />);
