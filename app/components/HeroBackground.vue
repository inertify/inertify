<template>
  <!-- Fills the hero root, which the theme already makes `relative isolate`. -->
  <div
    aria-hidden="true"
    class="pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,black_55%,transparent)]"
  >
    <!-- A wash of the brand color coming in from the top left. Full strength in
         the gradient and faded as a layer, so it follows the color mode. -->
    <div class="absolute inset-0 opacity-15 bg-[radial-gradient(70%_55%_at_30%_-10%,var(--ui-primary),transparent_60%)] dark:opacity-20" />

    <svg class="absolute inset-0 size-full text-zinc-950/[0.05] dark:text-white/[0.06]">
      <defs>
        <pattern
          id="hero-grid"
          width="56"
          height="56"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M.5 56V.5H56"
            fill="none"
            stroke="currentColor"
          />
        </pattern>
      </defs>

      <rect
        width="100%"
        height="100%"
        fill="url(#hero-grid)"
      />
    </svg>
  </div>
</template>
