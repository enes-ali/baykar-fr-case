import { Button } from "~/components/Button";
import type { ReviewCardProps } from "./ReviewCard";
import ReviewSlider from "./ReviewSlider";

const reviews: ReviewCardProps[] = [
  {
    companyImage: "/icons/companies/zoomerr.svg",
    content:
      "Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.",
    user: {
      name: "Hellen Jummy",
      role: "Team Lead",
      profilePicture: "/images/profilePictures/1.jpg",
    },
  },
  {
    companyImage: "/icons/companies/zoomerr.svg",
    content:
      "Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.",
    user: {
      name: "Hellena John",
      role: "Co-founder",
      profilePicture: "/images/profilePictures/2.jpg",
    },
  },
  {
    companyImage: "/icons/companies/shells.svg",
    content:
      "Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla.",
    user: {
      name: "David Oshodi",
      role: "Manager",
      profilePicture: "/images/profilePictures/3.jpg",
    },
  },

  {
    companyImage: "/icons/companies/artvenue.svg",
    content:
      "A eget sed posuere dui risus habitasse mauris. Venenatis aliquet id ultrices a lacus. Pretium vehicula pretium posuere justo sed.",
    user: {
      name: "David Oshodi",
      role: "Manager",
      profilePicture: "/images/profilePictures/4.jpg",
    },
  },
  {
    companyImage: "/icons/companies/wa.svg",
    content:
      "Magna egestas aliquet ut integer non. Sed diam enim nibh sit. Aliquam laoreet aenean metus nibh eu scelerisque.",
    user: {
      name: "Charolette Hanlin",
      role: "CEO",
      profilePicture: "/images/profilePictures/5.jpg",
    },
  },
];


export default function Reviews() {
  return (
    <div>
      <div className="mx-auto box-content flex max-w-container px-4 lg:gap-12 lg:px-20">
        <h2 className="h5 lg:h2 mb-8 w-full text-center lg:mb-20 lg:text-start">
          Because they love us
        </h2>

        <div className="hidden h-fit flex-shrink-0 gap-6 lg:flex">
          <Button
            className="review-slider-prev rounded-full"
            size="md"
            leftIcon={<img src="/icons/arrow-left.svg" className="h-6 w-6" />}
          />

          <Button
            className="review-slider-next rounded-full"
            size="md"
            leftIcon={<img src="/icons/arrow-right.svg" className="h-6 w-6" />}
          />
        </div>
      </div>

      <div className="relative">
        <div className="absolute -top-4 left-0 right-0 mx-auto h-[90%] w-full lg:-top-10  lg:px-20">
          <div className="h-full w-full bg-[#FDE68A]"></div>
        </div>

        <ReviewSlider
          reviews={reviews}
          navigation={{
            prev: ".review-slider-prev",
            next: ".review-slider-next",
          }}
        />
      </div>
    </div>
  );
}
