import { splitProps, type JSX } from "solid-js";
import { cn } from "../utils/cn";
interface FlipperCircleProps extends JSX.HTMLAttributes<HTMLSpanElement> {}

export const FlipperCircle = (props: FlipperCircleProps) => {
  const [, others] = splitProps(props, ["class"]);
  return (
    <span
      class={cn(
        `absolute w-[0.375rem] md:w-[0.75rem] md:h-[0.75rem] h-[0.375rem] rounded-full bg-blue-800`,
        props.class
      )}
      {...others}
    ></span>
  );
};
