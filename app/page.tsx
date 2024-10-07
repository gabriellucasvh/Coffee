import Navbar from "@/components/Navbar";
import Inicio from "@/components/specify/Inicio";

export default function Home() {
  return (
    <div className="h-screen max-w-full font-[family-name:var(--font-geist-sans)] text-white">
      <main className="">
        <Navbar />
        <Inicio />
      </main>
    </div>
  );
}
