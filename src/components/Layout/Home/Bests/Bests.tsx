import { Button } from "~/components/Button";
import BestCard from "./BestCard";

const bestsMock = [
  {
    image: "/images/card-1.jpg",
    title: "Title",
    text: "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
  },
  {
    image: "/images/card-2.jpg",
    title: "Title",
    text: "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
  },
  {
    image: "/images/card-3.jpg",
    title: "Title",
    text: "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
  },
];

interface BestsProps {}

export default function Bests({}: BestsProps) {
  return (
    <section
      className="border-[#E2E8F0] border-[1px_0px_1px_0px] bg-[#0F172A]
      bg-bests-mobile bg-[left_0_top_513px] bg-no-repeat lg:bg-bests-desktop
      lg:bg-[center_220px]">
      <div className="mx-auto box-content max-w-container px-4 py-12 lg:p-20">
        <div className="mb-8 flex flex-col items-center lg:mb-20 lg:flex-row lg:gap-20">
          <h5
            className="mb-8 w-full text-center text-[2rem] font-bold leading-[2.2rem]
            text-white lg:text-start lg:text-[3.5rem] lg:leading-[3.85rem]">
            The best of the best
          </h5>

          <Button size="xl" className="flex-shrink-0 border-white text-white">
            Sign up now
          </Button>
        </div>

        <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
          {bestsMock.map((bestItem, index) => (
            <BestCard {...bestItem} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
