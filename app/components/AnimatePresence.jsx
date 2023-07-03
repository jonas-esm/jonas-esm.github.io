"use client";
import { AnimatePresence } from "framer-motion";
import React from "react";
import { Navbar } from ".";

const AnimatePresenceContainer = ({ children }) => {
  return (
    <AnimatePresence mode="wait" initial={true}>
      {children}
    </AnimatePresence>
  );
};

export default AnimatePresenceContainer;
