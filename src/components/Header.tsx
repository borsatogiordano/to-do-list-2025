import { Rocket } from "lucide-react";

export function Header() {
  return (
    <div className="w-screen h-50 bg-stone-950 items-center justify-center flex gap-4 -mb-6">
      <Rocket size={42} color="#4EA8DE"/>
      <h1 className="text-[#4EA8DE] text-5xl font-black">
        to<strong className="text-[#5E60CE]">do</strong>
      </h1>
    </div>
  );
}