"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
// const DynamicHome = dynamic(() => import("./Home"), { ssr: false });

export default function Other() {
  const router = useRouter();
  return (
    <motion.div
      initial={{ rotateY: 90, x: "50%", scale: 0.8 }}
      animate={{ rotateY: 0, x: 0, scale: 1 }}
      exit={{ x: 300, opacity: 0 }}
      key={router.asPath}
      transition={{
        type: "spring",
        // stiffness: 260,
        duration: 2000,
        // damping: 20,
      }}
      className="h-screen w-full bg-primary text-white flex justify-center items-center"
    >
      <h1 className="m-auto">Hello</h1>
    </motion.div>
  );
}
