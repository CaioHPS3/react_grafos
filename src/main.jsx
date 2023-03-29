import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { create } from 'zustand'

export const allStates = create((set) => ({
    userLogged: false,
    setUserState: () => set((state) => ({ userLogged: !state.userLogged })),
  }))

import Root from "./componets/Root";

const domNode = document.getElementById("root");
const root = createRoot(domNode);

root.render(<Root />);
