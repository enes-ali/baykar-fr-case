import { Button } from "~/components/Button";

export default function Campagin() {
  return (
    <div
      className="bg-banner mx-auto box-content flex max-w-container flex-col
      items-center justify-center gap-8 bg-cover bg-no-repeat px-4 py-12 lg:flex-row
      lg:gap-20 lg:bg-none lg:p-20">
      <div className="flex flex-col items-center gap-8 lg:items-start">
        <h1 className="h2 lg:h1 text-center lg:text-start">
          Collectible Sneakers
        </h1>

        <p className="p-lg max-w-[714px] text-center lg:text-start">
          Sit elit feugiat turpis sed integer integer accumsan turpis. Sed
          suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices
          amet.
        </p>

        <div className="flex w-fit items-center gap-4">
          <Button size="lg">Sign up now</Button>

          <Button
            appearance="link"
            className="px-2"
            textContainerClassName="px-2"
            leftIcon={
              <img
                src="/icons/play-circle.svg"
                className="h-5 w-5"
              />
            }>
            Watch Demo
          </Button>
        </div>
      </div>

      <img
        src="/images/banner-shoe.png"
        className="h-auto w-full max-w-[486px] object-contain"
      />
    </div>
  );
}
