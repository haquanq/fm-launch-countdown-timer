import { createEffect, on } from "solid-js";
import { FlipperTop } from "./FlipperTop";
import { FlipperBottom } from "./FlipperBottom";

interface FLipperProps {
  value: [number, number];
  label: string;
}

export const Flipper = (props: FLipperProps) => {
  let flipperRef!: HTMLDivElement;
  let oldFlipperTopRef!: HTMLDivElement;
  let oldFlipperBottomRef!: HTMLDivElement;
  let newFlipperBottomRef!: HTMLDivElement;
  let newFlipperTopRef!: HTMLDivElement;

  createEffect(
    on(
      () => props.value[0],
      () => {
        requestAnimationFrame(() => {
          oldFlipperTopRef.style.transformOrigin = "center bottom";
          oldFlipperTopRef.style.transition = "";
          oldFlipperTopRef.style.transform = "rotateX(0)";

          newFlipperTopRef.style.opacity = "0.7";
          newFlipperTopRef.style.transition = "opacity 400ms ease";

          oldFlipperBottomRef.style.opacity = "0.5";
          oldFlipperBottomRef.style.transition = "opacity 200ms ease 150ms";

          newFlipperBottomRef.style.transition = "";
          newFlipperBottomRef.style.transformOrigin = "center top";
          newFlipperBottomRef.style.transform = "rotateX(90deg)";

          requestAnimationFrame(() => {
            oldFlipperTopRef.style.transition = "transform 200ms ease-in";
            oldFlipperTopRef.style.transform = "rotateX(90deg)";

            setTimeout(() => {
              newFlipperTopRef.style.opacity = "";
              oldFlipperBottomRef.style.opacity = "";
            }, 200);
            newFlipperBottomRef.style.transition = "transform 200ms ease 200ms";
            newFlipperBottomRef.style.transform = "rotateX(0)";
          });
        });
      }
    )
  );

  const currentValue = () =>
    props.value[0].toLocaleString(undefined, {
      minimumIntegerDigits: 2,
    });
  const oldValue = () =>
    props.value[1].toLocaleString(undefined, {
      minimumIntegerDigits: 2,
    });

  return (
    <div class="flipper">
      <div class="flipper-content z-50 relative" ref={flipperRef}>
        <FlipperTop
          class="absolute top-0 z-[999]"
          ref={oldFlipperTopRef}
          value={oldValue()}
        />
        <FlipperBottom
          class="absolute z-[998] bottom-0"
          ref={newFlipperBottomRef}
          value={currentValue()}
        />

        <FlipperTop ref={newFlipperTopRef} value={currentValue()} />
        <FlipperBottom ref={oldFlipperBottomRef} value={oldValue()} />
      </div>
      <p class="flipper-label mt-[0.9375rem] md:mt-[1.75rem] text-blue-100 text-center uppercase tracking-[0.44em]">
        {props.label}
      </p>
    </div>
  );
};
