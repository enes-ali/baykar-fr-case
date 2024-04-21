import Head from "next/head";

import {
  Banner,
  BaseLayout,
  Bests,
  GrowYourCollection,
  Reviews,
  WhyJoinUs,
  WorldMap,
} from "~/components";

export default function Home() {
  return (
    <>
      <Head>
        <title>Collers</title>
      </Head>

      <BaseLayout>
        <Banner />

        <Bests />

        <section
          className="max-w-screen overflow-hidden p-[1rem_1rem_3.5rem_1rem]
          lg:px-20 lg:py-40">
          <WhyJoinUs />
        </section>

        <section className="py-12 lg:py-20">
          <Reviews />
        </section>

        <GrowYourCollection />

        <WorldMap
          locations={[
            {
              position: { x: 141, y: 228 },
              image: "/images/shoe-4.jpg",
              content: "Emma Simpson collected one pair of Cool Shoes.",
              width: "32px",
            },

            {
              position: { x: 210, y: 298 },
              image: "/images/shoe-3.jpg",
              content: "Mark Zuckerburg collected one pair of Cool Shoes.",
              width: "24px",
            },

            {
              position: { x: 210, y: 298 },
              image: "/images/card-3.jpg",
              content: "Elon Musk collected one pair of Cool Shoes.",
              width: "24px",
            },

            {
              position: { x: 324, y: 498 },
              image: "/images/shoe-3.jpg",
              content: "Jeff bezos collected one pair of Cool Shoes.",
              width: "24px",
            },

            {
              position: { x: 371, y: 468 },
              image: "/images/card-2.jpg",
              content: "Emma Simpson collected one pair of Cool Shoes.",
              width: "16px",
            },

            {
              position: { x: 328, y: 168 },
              image: "/images/card-1.jpg",
              content: "Emma Simpson collected one pair of Cool Shoes.",
              width: "30px",
            },

            {
              position: { x: 413, y: 67 },
              image: "/images/shoe-3.jpg",
              content: "Emma Simpson collected one pair of Cool Shoes.",
              width: "16px",
            },

            {
              position: { x: 584, y: 432 },
              image: "/images/shoe-4.jpg",
              content: "Emma Simpson collected one pair of Cool Shoes.",
              width: "25px",
            },

            {
              position: { x: 785, y: 339 },
              image: "/images/card-2.jpg",
              content: "Mark Zuckerberg collected one pair of Cool Shoes.",
              width: "24px",
            },

            {
              position: { x: 886, y: 329 },
              image: "/images/card-3.jpg",
              content: "Jeff Bezos collected one pair of Cool Shoes.",
              width: "16px",
            },

            {
              position: { x: 910, y: 488 },
              image: "/images/shoe-3.jpg",
              content: "Elon Must collected one pair of Cool Shoes.",
              width: "24px",
            },
          ]}
        />
      </BaseLayout>
    </>
  );
}
