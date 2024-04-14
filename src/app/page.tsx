import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Evan Hill - AI Portfolio",
};
export default function Home() {
  return (
    <section className="space-y-16 bg-[url('/background.png')]">
      Front page
    </section>
  );
}
