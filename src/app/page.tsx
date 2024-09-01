"use client";

import Flashcard from "@/components/flashcard";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-between p-24">
      <Flashcard question="Hello, World!" answer="World, Hello!" onValueChange={(value) => { console.log(value) }} />
    </main>
  );
}
