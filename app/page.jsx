import dynamic from "next/dynamic";

const DynamicHome = dynamic(() => import("./Home"), { ssr: false });

export default function Home() {
  return <DynamicHome />;
}
