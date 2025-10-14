import Image from "next/image";
import NavBar from "./components/navbar";
import Hero from "./components/hero";

export default function Home() {
  return (
    <div className="p-4 bg-[url('/background.jpg')] bg-center bg-cover h-[100vh]">
      <NavBar/>
      <Hero/>
    </div>
  );
}
