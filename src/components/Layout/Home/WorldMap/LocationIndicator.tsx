import { forwardRef, type MouseEventHandler } from "react";
import classNames from "classnames";

export interface LocationIndicatorProps {
  width: string;
  isActive?: boolean;
  position: {
    x: number;
    y: number;
  };
  onClick: MouseEventHandler;
}

const LocationIndicator = forwardRef<HTMLDivElement, LocationIndicatorProps>(
  function ({ width, isActive, position, onClick }, ref) {
    return (
      <div
        ref={ref}
        onClick={onClick}
        style={{
          left: position.x,
          top: position.y,
          width,
          height: width,
        }}
        className={classNames(
          "absolute cursor-pointer rounded-full border-[3px] border-[#A3E635]",
          { "bg-[#D9F99D]": isActive },
        )}></div>
    );
  },
);

export default LocationIndicator;
