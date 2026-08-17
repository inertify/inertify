<template>
  <span class="relative inline-block whitespace-nowrap">
    <slot />

    <!-- Drawn rather than a border so it keeps the hand-made curve at any width;
         `preserveAspectRatio="none"` stretches it to whatever it underlines, and
         a non-scaling stroke keeps that stretch from thinning the line out. -->
    <svg
      aria-hidden="true"
      viewBox="0 0 220 14"
      fill="none"
      preserveAspectRatio="none"
      class="absolute inset-x-0 -bottom-2 h-3 w-full text-primary"
    >
      <path
        d="M4 9 C 60 3, 150 3, 216 8"
        stroke="currentColor"
        stroke-width="5"
        stroke-linecap="round"
        vector-effect="non-scaling-stroke"
        opacity="0.65"
      />
    </svg>
  </span>
</template>
