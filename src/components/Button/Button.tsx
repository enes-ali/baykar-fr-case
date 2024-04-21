import React, {
  CSSProperties,
  ForwardedRef,
  forwardRef,
  HTMLAttributeAnchorTarget,
  MouseEventHandler,
  PropsWithChildren,
  ReactNode,
} from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const buttonVariants = cva(["flex items-center justify-center rounded-lg"], {
  variants: {
    appearance: {
      outline:
        "border-2 border-primary bg-transparent text-primary disabled:opacity-50",
      link: "bg-transparent text-primary",
      filled: "bg-white shadow-filled-button",
    },
    size: {
      md: "p-3 text-base font-medium leading-6 tracking-[0.031rem]",
      lg: "p-4 text-xl font-medium leading-6 tracking-[0.031rem]",
      xl: "py-5 px-6 text-2xl font-bold leading-6 tracking-[0.031rem]",
    },
  },
  defaultVariants: {
    appearance: "outline",
    size: "md",
  },
});

interface BaseButtonProps extends VariantProps<typeof buttonVariants> {
  unstyled?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  disabled?: boolean;
  className?: string;
  textContainerClassName?: string;
  style?: CSSProperties;
  htmlType?: "button" | "submit";
  onClick?: MouseEventHandler;
  [x: string]: any;
}

interface NormalButtonProps extends BaseButtonProps {
  type?: "normal";
  style?: CSSProperties;
  href?: never;
  target?: never;
}

interface LinkButtonProps extends BaseButtonProps {
  type?: "link";
  style?: CSSProperties;
  href: string;
  target?: HTMLAttributeAnchorTarget;
}

type ButtonProps = PropsWithChildren<NormalButtonProps | LinkButtonProps>;

function Button(
  {
    type = "normal",
    appearance,
    unstyled = false,
    size = "md",
    leftIcon,
    rightIcon,
    disabled = false,
    children,
    className,
    textContainerClassName,
    style,
    htmlType = "button",
    href,
    target = "_self",
    onClick,
    ...extraProps
  }: ButtonProps,
  ref: ForwardedRef<HTMLButtonElement>,
) {
  const content = (
    <>
      {leftIcon}

      {children ? (
        <span className={twMerge("px-4", textContainerClassName)}>
          {children}
        </span>
      ) : undefined}

      {rightIcon}
    </>
  );

  return (
    <>
      {type === "normal" && (
        <button
          type={htmlType}
          ref={ref as ForwardedRef<HTMLButtonElement>}
          disabled={disabled}
          style={style}
          className={twMerge(buttonVariants({ appearance, size }), className)}
          onClick={onClick}
          {...extraProps}>
          {content}
        </button>
      )}

      {type === "link" && (
        <a
          style={style}
          href={href}
          target={target}
          className={twMerge(buttonVariants({ appearance, size }), className)}
          onClick={onClick}
          {...extraProps}>
          {content}
        </a>
      )}
    </>
  );
}

export default forwardRef<HTMLButtonElement, ButtonProps>(
  Button,
) as React.FC<ButtonProps>;
