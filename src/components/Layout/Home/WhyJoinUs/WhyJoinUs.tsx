import AppWindow from "~/components/AppWindow";
import { WhyJoinUsContent } from "./Content";

export default function WhyJoinUs() {
  return (
    <div
      className="relative mx-auto flex w-full max-w-container flex-col
      items-center gap-8 rounded-[1.875rem] bg-white px-4 py-8 shadow-why-join-us
      lg:flex-row lg:gap-20 lg:p-20">
      <WhyJoinUsContent />

      <div className="relative z-40 w-full">
        <AppWindow>
          <div className="relative w-full">
            <img src="/images/video-banner.jpg" className="w-full" />

            <div
              className="absolute bottom-0 left-0 right-0 top-0 m-auto grid
              h-[144px] w-[144px] place-content-center rounded-full bg-[#121619BF]">
              <img src="/icons/play.svg" className="h-24 w-24" />
            </div>
          </div>
        </AppWindow>
      </div>

      <img
        src="/images/deco-video.svg"
        className="absolute bottom-[-47px] left-[-40px] right-0 z-0 m-auto
        w-[120%] max-w-none lg:bottom-0 lg:left-auto lg:right-[-38px] lg:top-0
        lg:w-[60%]"
      />
    </div>
  );
}
