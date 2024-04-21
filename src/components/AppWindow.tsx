import { PropsWithChildren } from "react";

interface AppWindowProps {
  className?: string;
}

export default function AppWindow({
  className,
  children,
}: PropsWithChildren<AppWindowProps>) {
  return (
    <div
      className={`shadow-app-window rounded-[1.25rem] border-[5px] border-white
      bg-white ${className}`}>
      <div className="flex gap-[0.313rem] px-4 py-4">
        <div className="h-[10px] w-[10px] rounded-full bg-[#E11D48]"></div>
        <div className="h-[10px] w-[10px] rounded-full bg-[#FBBF24]"></div>
        <div className="h-[10px] w-[10px] rounded-full bg-[#22C55E]"></div>
      </div>

      <div className="rounded-b-[1.25rem] overflow-hidden">
        {children}
      </div>
    </div>
  );
}
