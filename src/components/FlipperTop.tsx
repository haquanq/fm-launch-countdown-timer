import { splitProps, type JSX } from "solid-js";
import { FlipperCircle } from "./FlipperCircle";
import { cn } from "../utils/cn";
interface FlipperTopProps extends JSX.HTMLAttributes<HTMLDivElement> {
  value: string;
}

export const FlipperTop = (props: FlipperTopProps) => {
  const [, otherProps] = splitProps(props, ["class", "ref"]);
  return (
    <div
      ref={props.ref}
      class={cn(
        "flipper-top bg-[#2C2C44] flex justify-center text-red-500 w-full relative z-50 h-1/2 overflow-hidden",
        props.class
      )}
      {...otherProps}
    >
      <FlipperCircle class="absolute -bottom-[0.1875rem] -left-[0.1875rem] md:-bottom-[0.375rem] md:-left-[0.375rem]" />
      <FlipperCircle class="absolute -bottom-[0.1875rem] -right-[0.1875rem] md:-bottom-[0.375rem] md:-right-[0.375rem]" />
      <span class="w-full h-2/1 flex justify-center items-center">
        {props.value}
      </span>
    </div>
  );
};
