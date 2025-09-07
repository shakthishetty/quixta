import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="bg-black min-h-screen flex items-center justify-center px-6 text-white">
      <div className="text-center max-w-2xl space-y-8">
       <h1 className="text-4xl md:text-5xl font-bold leading-snug">
            Future of Advanced<br />
           <span className="mt-2 block">Materials</span>
         </h1>


        <p className="text-base text-gray-300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
          incididunt ut labore et .
        </p>

        <Button variant="default">
          Get Started
        </Button>
      </div>
    </main>
  );
}
