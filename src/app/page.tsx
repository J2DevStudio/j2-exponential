import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import Companies, { companies } from "@/sections/Companies";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Companies />
    </>
  );
}
