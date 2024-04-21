import Image from "next/image";

import { Button } from "~/components/Button";

interface BestCardProps {
  image: string;
  title: string;
  text: string;
}

export default function BestCard({ image, title, text }: BestCardProps) {
  return (
    <div
      className="shadow-best-card w-full overflow-hidden rounded-[0.65rem] border
      border-[#0F172A] bg-[#0F172A]">
      <Image
        src={image}
        width={400}
        height={220}
        alt={title}
        className="h-[220px] w-full object-cover"
      />

      <div className="p-8">
        <h6 className="mb-4 h6 text-white">
          {title}
        </h6>

        <p className="mb-8 p-lg text-white">{text}</p>

        <Button
          size="lg"
          leftIcon={<img src="/icons/shopping-cart.svg" className="h-6" />}
          className="w-full border-white text-white">
          Buy Now
        </Button>
      </div>
    </div>
  );
}
