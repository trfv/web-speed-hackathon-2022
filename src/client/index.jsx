import React from "react";
import { createRoot } from "react-dom/client";

import { App } from "./foundation/App";

const root = createRoot(document.getElementById("root"));
root.render(<App tab="home" />);
