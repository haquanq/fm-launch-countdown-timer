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
      <FlipperCircle class="absolute -bottom-[calc(var(--circle-size)/2)] -left-[calc(var(--circle-size)/2)]" />
      <FlipperCircle class="absolute -bottom-[calc(var(--circle-size)/2)] -right-[calc(var(--circle-size)/2)]" />
      <span class="w-full h-2/1 flex justify-center items-center">
        {props.value}
      </span>
    </div>
  );
};
