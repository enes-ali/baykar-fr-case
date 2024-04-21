import { Swiper, SwiperSlide } from "swiper/react";

import ReviewCard, { type ReviewCardProps } from "./ReviewCard";

import "swiper/css";

import { Navigation } from "swiper/modules";

interface ReviewSliderProps {
  reviews: ReviewCardProps[];
  navigation?: {
    prev: string;
    next: string;
  };
}

export default function ReviewSlider({
  reviews,
  navigation,
}: ReviewSliderProps) {
  return (
    <Swiper
      modules={[Navigation]}
      slidesPerView={1.2}
      centeredSlides
      centeredSlidesBounds
      spaceBetween={16}
      initialSlide={2}
      wrapperClass="swiper-wrapper review-swiper-wrapper"
      navigation={{
        nextEl: navigation?.next,
        prevEl: navigation?.prev,
      }}
      className=" 2xl"
      breakpoints={{
        400: {
          slidesPerView: 1.4,
        },
        520: {
          slidesPerView: 1.6,
        },
        768: {
          slidesPerView: 2.5,
        },
        1024: {
          spaceBetween: 24,
          slidesPerView: 3.4,
        },
        1280: {
          spaceBetween: 24,
          slidesPerView: 3.5,
        },
        1536: {

          spaceBetween: 24,
          slidesPerView: 4.5,
        }
      }}>
      {reviews.map((review, index) => (
        <SwiperSlide key={index}>
          <ReviewCard {...review} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
