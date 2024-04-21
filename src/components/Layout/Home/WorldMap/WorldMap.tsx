import { useRef, useState } from "react";
import { usePopper } from "react-popper";

import LocationIndicator, {
  type LocationIndicatorProps,
} from "./LocationIndicator";
import LocationPopover from "./LocationPopover";

interface LocationType extends Omit<LocationIndicatorProps, "onClick"> {
  image: string;
  content: string;
}

interface WorldMapProps {
  locations: LocationType[];
}

export default function WorldMap({ locations }: WorldMapProps) {
  const [activeLocation, setActiveLocation] = useState(0);

  const [indicatorElement, setIndicatorElement] =
    useState<HTMLDivElement | null>(null);
  const popoverRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);
  const { styles, attributes } = usePopper(
    indicatorElement,
    popoverRef.current,
    {
      placement: "top",
    },
  );

  return (
    <section className="bg-[#78350F] py-12 pl-4 lg:p-20 lg:pr-0">
      <div className="relative mx-auto h-fit w-fit max-w-full overflow-x-hidden">
        <img src="/images/chart.png" className="max-w-[none]" />

        <div
          className="absolute bottom-0 left-0 right-0 top-0 m-auto h-fit
          text-center">
          <h2 className="h3 font-black text-white lg:text-8xl lg:leading-[6.6rem]">
            11,658,467
          </h2>

          <h2 className="h5 lg:h2 text-white">Shoes Collected</h2>
        </div>

        {locations.map((location, index) => (
          <LocationIndicator
            key={index}
            ref={(element) => {
              if (index === activeLocation) setIndicatorElement(element);
            }}
            isActive={index === activeLocation}
            onClick={() => setActiveLocation(index)}
            {...location}
          />
        ))}
      </div>

      <LocationPopover
        image={locations[activeLocation].image}
        content={locations[activeLocation].content}
        ref={popoverRef}
        style={styles.popper}
        {...attributes.popper}
      />
    </section>
  );
}
