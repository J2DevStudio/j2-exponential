import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

// using twMerge to allow dynamic use of this Orbit component
// when used can dynamically set classes - mainly 'size'
// pass the div element attributes as prop to ensure clasname is dynamically added

export const Orbit = (props: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={twMerge(
        "size-[200px] border border-gray-200/20 rounded-full",
        props.className
      )}
    ></div>
  );
};
