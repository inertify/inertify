<script setup lang="ts">
const appConfig = useAppConfig()
const site = useSiteConfig()
const { localePath } = useDocusI18n()
const { sections } = useSubNavigation()

const ariaLabel = appConfig.header?.title || site.name
// The documentation section the current page belongs to — "Form" under /form,
// and whichever package is added next. Empty outside the documentation, where
// the wordmark stands alone. `to` is the section's first page rather than its
// root, which only exists as a redirect.
const section = computed(() => sections.value.find(item => item.active))
</script>

<template>
  <div class="inline-flex items-center gap-2">
    <NuxtLink
      :to="localePath('/')"
      :aria-label="ariaLabel"
      class="inline-flex items-center gap-2"
    >
      <AppHeaderLogo class="h-6 w-auto shrink-0" />
      <span class="text-3xl font-bold tracking-tight font-heading italic text-primary">inertify</span>
    </NuxtLink>

    <template v-if="section">
      <span class="text-lg font-bold font-heading italic text-muted">|</span>

      <NuxtLink
        :to="section.to"
        class="text-lg font-bold tracking-tight font-heading italic lowercase"
      >
        {{ section.label }}
      </NuxtLink>
    </template>
  </div>
</template>
