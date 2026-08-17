<script setup lang="ts">
// One full-width row per package, alternating which side carries the text, so
// each package gets room for a real example instead of a card. The example
// itself comes from a slot named after the package id — content/index.md fills
// `#form` with the interactive showcase — and packages still in design fall back
// to their icon.
const packages = usePackages()

const rows = computed(() => packages.value.map((pkg, index) => ({
  pkg,
  reverse: index % 2 === 1,
  // Where the packages start, so the header link and the hero arrow have
  // something to scroll to.
  id: index === 0 ? 'packages' : undefined,
})))
</script>

<template>
  <UPageSection
    v-for="{ pkg, reverse, id } in rows"
    :id="id"
    :key="pkg.id"
    :class="id ? 'scroll-mt-24' : undefined"
    :icon="pkg.icon"
    :title="pkg.name"
    :description="pkg.description"
    :features="pkg.features.map(feature => ({ title: feature, icon: 'i-lucide-check' }))"
    :reverse="reverse"
    orientation="horizontal"
    :ui="{
      // The section above already carries the family's heading, so the rows
      // only need enough air to read as separate blocks.
      container: 'py-8 sm:py-10 lg:py-12',
      leadingIcon: pkg.status === 'available' ? 'text-primary' : 'text-dimmed',
      features: 'gap-3',
      // `reverse` orders the text last at every breakpoint, which would put the
      // example above the name it belongs to once the row stacks.
      wrapper: reverse ? 'order-first lg:order-last' : undefined,
    }"
  >
    <template #headline>
      <UBadge
        :label="pkg.statusLabel"
        size="sm"
        :color="pkg.status === 'available' ? 'primary' : 'neutral'"
        :variant="pkg.status === 'available' ? 'subtle' : 'outline'"
      />
    </template>

    <template #footer>
      <div class="flex flex-wrap items-center gap-x-4 gap-y-3">
        <UButton
          v-if="pkg.to"
          :to="pkg.to"
          label="Documentation"
          icon="i-lucide-book-open"
          size="lg"
        />

        <div
          v-if="pkg.status === 'available'"
          class="flex flex-wrap items-center gap-2 font-mono text-xs text-dimmed"
        >
          <span class="rounded-md border border-default px-2 py-1">{{ pkg.composer }}</span>
          <span class="rounded-md border border-default px-2 py-1">{{ pkg.npm }}</span>
        </div>

        <p
          v-else
          class="text-xs text-dimmed"
        >
          In design. Scope and package names are not final.
        </p>
      </div>
    </template>

    <slot :name="pkg.id">
      <div class="grid min-h-80 place-items-center rounded-2xl border border-dashed border-default bg-elevated/30 p-10">
        <div class="flex flex-col items-center gap-4 text-center">
          <UIcon
            :name="pkg.icon"
            class="size-20 text-dimmed"
          />

          <p class="max-w-xs text-sm text-muted">
            {{ pkg.tagline }}, declared in Laravel and rendered by your own components.
          </p>
        </div>
      </div>
    </slot>
  </UPageSection>
</template>
