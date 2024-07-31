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
        "bg-blue-500 relative flex items-end justify-center text-[length:var(--flipper-number-size)] text-red-300 w-full h-1/2 overflow-hidden rounded-b-inherit",
        props.class
      )}
      {...otherProps}
    >
      <FlipperCircle class="absolute -top-[calc(var(--flipper-circle-size)/2)] -left-[calc(var(--flipper-circle-size)/2)]" />
      <FlipperCircle class="absolute -top-[calc(var(--flipper-circle-size)/2)] -right-[calc(var(--flipper-circle-size)/2)]" />

      <span class="w-full h-2/1 flex justify-center items-center">
        {props.value}
      </span>
    </div>
  );
};
