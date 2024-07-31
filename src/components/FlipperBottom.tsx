import { splitProps, type JSX } from "solid-js";
import { FlipperCircle } from "./FlipperCircle";
import { cn } from "../utils/cn";
interface FlipperBottomProps extends JSX.HTMLAttributes<HTMLDivElement> {
  value: string;
}

export const FlipperBottom = (props: FlipperBottomProps) => {
  const [, otherProps] = splitProps(props, ["class", "ref"]);
  return (
    <div
      ref={props.ref}
      class={cn(
        "flipper-bottom bg-blue-500 relative flex items-end justify-center text-red-300 w-full h-1/2 overflow-hidden",
        props.class
      )}
      {...otherProps}
    >
      <FlipperCircle class="absolute -top-[0.1875rem] -left-[0.1875rem] md:-top-[0.375rem] md:-left-[0.375rem]" />
      <FlipperCircle class="absolute -top-[0.1875rem] -right-[0.1875rem] md:-top-[0.375rem] md:-right-[0.375rem]" />

      <span class="w-full h-2/1 flex justify-center items-center">
        {props.value}
      </span>
    </div>
  );
};
