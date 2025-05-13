import Editor from "@/components/editor";
import Toolbar from "@/components/toolbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-900 flex-col flex">
      <Editor />
      <Toolbar />
    </main>
  );
}
