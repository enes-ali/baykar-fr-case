import TabbedCollections from "./TabbedCollections";

export default function GrowYourCollection() {
  return (
    <div className="relative overflow-x-hidden">
      <div
        className="relative z-40 mx-auto box-content max-w-container px-4 pb-24
        pt-12 lg:px-20 lg:pb-32 lg:pt-20">
        <h2 className="h5 lg:h2 mb-8 text-center lg:text-start">
          Grow your collection
        </h2>

        <p className="mb-8 text-center lg:mb-20 lg:text-start">
          Enim neque massa porta adipiscing elit. Sem libero id faucibus nibh
          amet dictum pellentesque sed. Eu non turpis risus odio sapien, fames
          sit rhoncus. Nec magna sed interdum sit purus tellus. Et volutpat
          proin neque placerat at bibendum quam tellus.
        </p>

        <TabbedCollections />
      </div>

      <img
        src="/images/waves.svg"
        className="absolute bottom-0 left-0 z-0 max-w-[none] xl:w-full"
      />
    </div>
  );
}
