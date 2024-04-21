import { forwardRef, type CSSProperties } from "react";

export interface LocationPopoverProps {
  image: string;
  content: string;
  style: CSSProperties;
  [x: string]: any;
}

const LocationPopover = forwardRef<HTMLDivElement, LocationPopoverProps>(
  function ({ image, content, style, ...restProps }, ref) {
    return (
      <div ref={ref} style={style} {...restProps}>
        <img
          src={image}
          className="relative z-[2] box-content h-[200px] w-[256px] rounded-[0.625rem]
          border-[0.313rem] border-white object-cover shadow-why-join-us"
        />

        <div
          className="relative z-0 mx-auto w-[250px] translate-y-[-3px]
          rounded-[0.313rem] bg-[#E2E8F0] px-4 pb-2 pt-4 shadow-best-card">
          <p className="p-sm">{content}</p>
        </div>
      </div>
    );
  },
);

export default LocationPopover;
