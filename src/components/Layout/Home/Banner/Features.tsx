interface FeaturesProps {
  features: {
    icon: string;
    title: string;
    text: string;
  }[];
}

export default function Features({ features }: FeaturesProps) {
  return (
    <div
      className="mx-auto box-content flex max-w-container flex-col gap-8 bg-[#FEF3C7]
      px-4 py-12 lg:flex-row lg:gap-20 lg:bg-transparent lg:p-20">
      {features.map((feature, index) => {
        return (
          <div
            key={index}
            className="flex flex-col items-center gap-4 lg:items-start">
            <img src={feature.icon}  />

            <h3 className="w-fit text-xl font-medium leading-[1.375rem]">
              {feature.title}
            </h3>

            <p className="p-lg w-fit text-center lg:text-start">
              {feature.text}
            </p>
          </div>
        );
      })}
    </div>
  );
}
