import { Button } from "../Button";

export default function ExternalLinks() {
  return (
    <div className="flex flex-col gap-2 w-full items-center lg:items-start">
      <p className="py-3 font-medium leading-[1.1rem] text-white">
        Get the App
      </p>

      <Button
        className="p-0 w-fit"
        appearance="link"
        type="link"
        href="https://store.apple.com"
        leftIcon={<img src="/icons/app-store.png" />}
      />

      <Button
        className="p-0 w-fit"
        appearance="link"
        type="link"
        href="https://play.google.com"
        leftIcon={<img src="/icons/play-store.png" />}
      />

      <p
        className="pb-3 pt-12 font-medium leading-[1.1rem]
        text-[#E2E8F0]">
        Follow Us
      </p>

      <div className="flex justify-center gap-4 lg:justify-start">
        <img src="/icons/social-media/youtube.png" className="w-6 h-6" />
        <img src="/icons/social-media/facebook.png" className="w-6 h-6" />
        <img src="/icons/social-media/twitter.png" className="w-6 h-6" />
        <img src="/icons/social-media/instagram.png" className="w-6 h-6" />
        <img src="/icons/social-media/linkedin.png" className="w-6 h-6" />
      </div>
    </div>
  );
}
