<script setup lang="ts">
defineProps<{
  to: string
}>()
</script>

<template>
  <NuxtLink
    :to="to"
    target="_blank"
    class="inline-flex items-center gap-2.5 font-mono text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-muted transition-colors hover:text-highlighted"
  >
    <span
      aria-hidden="true"
      class="size-1.5 shrink-0 rounded-full bg-primary"
    />

    <slot />

    <UIcon
      name="i-lucide-arrow-right"
      class="size-3.5 shrink-0"
    />
  </NuxtLink>
</template>
