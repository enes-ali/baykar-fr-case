import React, { type ReactNode, useState } from "react";
import classNames from "classnames";

import { Button } from "../Button";

export interface TabViewTab {
  title: string;
  icon?: string;
}

interface TabViewProps {
  tabs: TabViewTab[] | string[];
  width: string;
  height: string;
  justify?: "start" | "end" | "center" | "space-between" | "space-around";
  onTabChange?: (activeTab: number) => void;
  className?: string;
  tabButtonPosition?: "left" | "right" | "top" | "bottom";
  gap?: string;
  tabGap?: string;
  defaultTab?: string | number;
  children?: ReactNode[];
}

/**
 * A component for tabbed views. Each child node will be mapped to tabs prop in order
 */
export default function TabView({
  tabs,
  width = "100%",
  height,
  justify = "start",
  className,
  tabButtonPosition = "top",
  gap = "20px",
  tabGap = "2rem",
  defaultTab,
  onTabChange,
  children,
}: TabViewProps) {
  const [activeTab, setActiveTab] = useState<number>(
    typeof defaultTab === "string"
      ? tabs.findIndex((tab) => tab === defaultTab)
      : defaultTab
        ? defaultTab
        : 0,
  );
  const onTabClick = (index: number) => {
    setActiveTab(index);
    onTabChange?.(index);
  };

  const tabPositionContainerClasses = {
    left: "flex-row",
    right: "flex-row-reverse",
    top: "flex-col",
    bottom: "flex-col-reverse",
  };

  const tabPositionTabContainerClasses = {
    left: "h-fit w-fit flex-col",
    right: "h-fit w-fit flex-col",
    top: "h-fit w-full flex-row",
    bottom: "h-fit w-full flex-row",
  };

  return (
    <div
      className={classNames(
        className,
        "flex",
        tabPositionContainerClasses[tabButtonPosition],
      )}
      style={{
        width: width,
        height: height,
        gap,
      }}>
      <div
        style={{ justifyContent: justify, gap: tabGap }}
        className={classNames(
          "relative flex flex-shrink-0 items-center overflow-scroll px-[2px] py-[2px]",
          tabPositionTabContainerClasses[tabButtonPosition],
        )}>
        {tabs.map((tab, index) => {
          return (
            <Button
              size="lg"
              key={index}
              appearance="filled"
              onClick={() => onTabClick(index)}
              textContainerClassName="w-full text-start whitespace-nowrap"
              leftIcon={
                typeof tab !== "string" && tab.icon ? (
                  <img src={tab.icon} />
                ) : undefined
              }
              rightIcon={
                activeTab === index ? (
                  <img src="/icons/arrow-right-grey.svg" className="h-6 w-6" />
                ) : (
                  <span className="h-6 w-6"></span>
                )
              }
              className={
                "flex-shrink-0 justify-start lg:w-full " +
                (activeTab !== index ? "bg-transparent shadow-none" : "")
              }>
              {typeof tab === "string" ? tab : tab.title}
            </Button>
          );
        })}
      </div>

      <div>{children?.[activeTab]}</div>
    </div>
  );
}
