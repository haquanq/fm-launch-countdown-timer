import { splitProps, type JSX } from "solid-js";
import { cn } from "../utils/cn";
interface FlipperCircleProps extends JSX.HTMLAttributes<HTMLSpanElement> {}

export const FlipperCircle = (props: FlipperCircleProps) => {
  const [, others] = splitProps(props, ["class"]);
  return (
    <span
      class={cn(
        `flipper-circle absolute aspect-square w-[var(--circle-size)] rounded-full bg-blue-800`,
        props.class
      )}
      {...others}
    ></span>
  );
};
