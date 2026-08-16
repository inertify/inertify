<script setup lang="ts">
import { ref } from 'vue'

const packages = usePackages()

const spotlightX = ref(0)
const spotlightY = ref(0)
const spotlightVisible = ref(false)

function trackSpotlight(event: MouseEvent) {
  const bounds = (event.currentTarget as HTMLElement).getBoundingClientRect()

  spotlightX.value = event.clientX - bounds.left
  spotlightY.value = event.clientY - bounds.top
  spotlightVisible.value = true
}

function hideSpotlight() {
  spotlightVisible.value = false
}
</script>

<template>
  <section
    aria-label="The Inertify package family"
    class="relative mx-auto w-full min-w-0 max-w-xl"
  >
    <div
      aria-hidden="true"
      class="absolute -inset-6 -z-10 rounded-[2.5rem] bg-primary/10 blur-3xl dark:bg-primary/5"
    />

    <div
      class="dark relative min-w-0 rounded-2xl border border-default bg-default shadow-2xl shadow-black/10 ring-1 ring-green-950/5 dark:shadow-black/30 dark:ring-white/5 [--spotlight-size:520px] before:pointer-events-none before:absolute before:-inset-px before:rounded-[inherit] before:bg-[radial-gradient(var(--spotlight-size)_var(--spotlight-size)_at_calc(var(--spotlight-x,0px))_calc(var(--spotlight-y,0px)),var(--ui-primary),transparent_70%)] before:opacity-0 before:transition-opacity before:duration-300"
      :class="spotlightVisible ? 'before:opacity-100' : ''"
      :style="{
        '--spotlight-x': `${spotlightX}px`,
        '--spotlight-y': `${spotlightY}px`,
      }"
      @mousemove="trackSpotlight"
      @mouseleave="hideSpotlight"
    >
      <div
        aria-hidden="true"
        class="pointer-events-none absolute inset-0 rounded-[inherit] bg-default/90"
      />

      <div class="relative min-w-0 overflow-hidden rounded-[inherit]">
        <div class="flex items-center gap-2 border-b border-muted bg-default px-4 py-3">
          <img
            src="/inertify-logo.svg"
            alt=""
            aria-hidden="true"
            class="h-4 w-auto shrink-0"
          >

          <span class="text-sm font-semibold text-highlighted">
            Packages
          </span>

          <span class="ms-auto truncate text-xs text-muted">
            Laravel · Inertia · Vue
          </span>
        </div>

        <div class="space-y-3 bg-muted p-4 text-left sm:p-5">
          <div
            v-for="pkg in packages"
            :key="pkg.id"
            class="flex items-center gap-3 rounded-xl p-3 transition"
            :class="pkg.status === 'available'
              ? 'border border-default bg-elevated/45 shadow-xs'
              : 'border border-dashed border-default bg-default/40'"
          >
            <div
              class="grid size-10 shrink-0 place-items-center rounded-lg"
              :class="pkg.status === 'available'
                ? 'bg-primary/10 text-primary ring-1 ring-primary/20'
                : 'bg-elevated text-dimmed'"
            >
              <UIcon
                :name="pkg.icon"
                class="size-5"
              />
            </div>

            <div class="min-w-0 flex-1">
              <p class="truncate text-sm font-semibold text-highlighted">
                {{ pkg.name }}
              </p>
              <p class="truncate text-xs text-muted">
                {{ pkg.tagline }}
              </p>
            </div>

            <UBadge
              :label="pkg.statusLabel"
              size="sm"
              :color="pkg.status === 'available' ? 'primary' : 'neutral'"
              :variant="pkg.status === 'available' ? 'subtle' : 'outline'"
              class="shrink-0"
            />
          </div>

          <div class="rounded-xl border border-default bg-default px-4 py-3 font-mono text-xs leading-6 text-muted">
            <p class="truncate">
              <span class="text-primary">$</span> composer require inertify/form
            </p>
            <p class="truncate">
              <span class="text-primary">$</span> npm install @inertify/form-vue
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
