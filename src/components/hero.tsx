import { Button } from "@/components/ui/button";
import Image from "next/image";
import heroBg from "../../public/images/hero_bg.avif"; // Add a real image in the public folder

const Hero = () => {
  return (
    <section className="relative w-full h-[70vh] flex items-center justify-center bg-gray-900 text-white">
      <Image
        src={heroBg}
        alt="Auction Cars"
        layout="fill"
        objectFit="cover"
        className="opacity-50"
      />
      <div className="text-center z-10">
        <h1 className="text-5xl font-bold mb-4">
          Find & Bid on Exclusive Cars!
        </h1>
        <p className="text-lg max-w-lg mx-auto">
          The best place to buy and sell luxury cars in real-time auctions.
        </p>
        <div className="mt-6">
          <Button size="lg" className="bg-yellow-500 text-black hover:bg-yellow-600">
            Browse Auctions
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
