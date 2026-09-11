import type { ScheduleIcon } from "@/lib/copy";

type Props = {
  name: ScheduleIcon;
  className?: string;
};

export function ScheduleIconMark({ name, className = "size-4" }: Props) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    className,
    "aria-hidden": true as const,
  };

  switch (name) {
    case "tent":
      return (
        <svg {...common}>
          <path
            d="M3 19 L12 5 L21 19"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinejoin="round"
          />
          <path d="M12 19 V12" stroke="currentColor" strokeWidth="1.75" />
        </svg>
      );
    case "utensils":
      return (
        <svg {...common}>
          <path
            d="M7 4 V20 M5 4 C5 7 9 7 9 4 M17 4 V10 C17 13 14 13 14 10 V4 M17 10 V20"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
        </svg>
      );
    case "lanyard":
      return (
        <svg {...common}>
          <path
            d="M8 6 C10 10 14 10 16 6"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
          <path
            d="M8 6 C6 12 8 16 12 20 C16 16 18 12 16 6"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
        </svg>
      );
    case "patch":
      return (
        <svg {...common}>
          <path
            d="M12 3 L19 7 V13 C19 17 15.5 20 12 21 C8.5 20 5 17 5 13 V7 Z"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinejoin="round"
          />
          <path
            d="M9 13 L11 15 L16 9"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "raft":
      return (
        <svg {...common}>
          <path
            d="M4 14 C7 18 17 18 20 14"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
          <path
            d="M7 14 V10 M12 14 V8 M17 14 V10"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
        </svg>
      );
    case "camp":
      return (
        <svg {...common}>
          <path
            d="M4 18 H20 M6 18 L10 10 L14 18 M12 14 L16 8 L20 18"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "paddle":
      return (
        <svg {...common}>
          <path
            d="M12 4 V16"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
          <path
            d="M8 18 C10 21 14 21 16 18 C15 16 13 15.5 12 16 C11 15.5 9 16 8 18 Z"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "letter":
      return (
        <svg {...common}>
          <rect
            x="4"
            y="6"
            width="16"
            height="12"
            rx="1.5"
            stroke="currentColor"
            strokeWidth="1.75"
          />
          <path
            d="M5 8 L12 13 L19 8"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "hunt":
      return (
        <svg {...common}>
          <circle cx="10" cy="10" r="5.5" stroke="currentColor" strokeWidth="1.75" />
          <path
            d="M14.5 14.5 L19 19"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
        </svg>
      );
    case "pack":
      return (
        <svg {...common}>
          <rect
            x="6"
            y="7"
            width="12"
            height="13"
            rx="2"
            stroke="currentColor"
            strokeWidth="1.75"
          />
          <path
            d="M9 7 V5 H15 V7 M8 12 H16"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
        </svg>
      );
  }
}
