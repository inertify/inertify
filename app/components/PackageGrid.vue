<script setup lang="ts">
const packages = usePackages()
</script>

<template>
  <UPageGrid class="lg:grid-cols-3">
    <UPageCard
      v-for="pkg in packages"
      :key="pkg.id"
      spotlight
      :to="pkg.to"
      :target="pkg.to?.startsWith('http') ? '_blank' : undefined"
      external
      :title="pkg.name"
      :description="pkg.description"
      :ui="{ container: 'min-w-0' }"
    >
      <template #header>
        <div class="flex items-center justify-between gap-3">
          <div
            class="grid size-12 place-items-center rounded-xl border border-default bg-default shadow-sm"
            :class="pkg.status === 'available' ? 'text-primary' : 'text-dimmed'"
          >
            <UIcon
              :name="pkg.icon"
              class="size-6"
            />
          </div>

          <UBadge
            :label="pkg.statusLabel"
            size="sm"
            :color="pkg.status === 'available' ? 'primary' : 'neutral'"
            :variant="pkg.status === 'available' ? 'subtle' : 'outline'"
          />
        </div>
      </template>

      <template #footer>
        <ul class="space-y-2 text-sm text-muted">
          <li
            v-for="feature in pkg.features"
            :key="feature"
            class="flex items-start gap-2"
          >
            <UIcon
              :name="pkg.status === 'available' ? 'i-lucide-check' : 'i-lucide-dot'"
              class="mt-0.5 size-4 shrink-0"
              :class="pkg.status === 'available' ? 'text-primary' : 'text-dimmed'"
            />
            <span>{{ feature }}</span>
          </li>
        </ul>

        <div
          v-if="pkg.status === 'available'"
          class="mt-5 flex flex-wrap items-center gap-2 font-mono text-xs text-dimmed"
        >
          <span class="rounded-md border border-default px-2 py-1">{{ pkg.composer }}</span>
          <span class="rounded-md border border-default px-2 py-1">{{ pkg.npm }}</span>
        </div>

        <p
          v-else
          class="mt-5 text-xs text-dimmed"
        >
          In design. Scope and package names are not final.
        </p>
      </template>
    </UPageCard>
  </UPageGrid>
</template>
