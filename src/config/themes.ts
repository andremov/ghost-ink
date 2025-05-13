export const themes = {
  day: {
    bg: "bg-neutral-50",
    text: "text-neutral-900",
    toolbar: "hover:bg-neutral-200",
    toolbarText: "text-neutral-600",
    active: "bg-neutral-200",
    slider: "bg-neutral-200 [&::-webkit-slider-thumb]:bg-neutral-400",
  },
  night: {
    bg: "bg-neutral-900",
    text: "text-neutral-100",
    toolbar: "hover:bg-neutral-700",
    toolbarText: "text-neutral-400",
    active: "bg-neutral-700",
    slider: "bg-neutral-700 [&::-webkit-slider-thumb]:bg-neutral-500",
  },
  warm: {
    bg: "bg-[#fff8f0]",
    text: "text-[#433422]",
    toolbar: "hover:bg-[#ffe4c4]",
    toolbarText: "text-[#8b7355]",
    active: "bg-[#ffe4c4]",
    slider: "bg-[#ffe4c4] [&::-webkit-slider-thumb]:bg-[#8b7355]",
  },
} as const;
