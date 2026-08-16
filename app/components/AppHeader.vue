<script setup lang="ts">
// The site is a single landing page, so the docs search button and content
// navigation are replaced with section anchors.
const appConfig = useAppConfig()

const links = computed(() => appConfig.navigation?.links || [])
const githubUrl = computed(() => appConfig.github?.url)
</script>

<template>
  <UHeader>
    <UNavigationMenu
      :items="links"
      variant="link"
    />

    <template #left>
      <AppHeaderLeft />
    </template>

    <template #right>
      <ClientOnly>
        <UColorModeButton />

        <template #fallback>
          <div class="h-8 w-8 animate-pulse rounded-md bg-neutral-200 dark:bg-neutral-800" />
        </template>
      </ClientOnly>

      <UButton
        v-if="githubUrl"
        color="neutral"
        variant="ghost"
        icon="i-simple-icons-github"
        :to="githubUrl"
        target="_blank"
        aria-label="GitHub"
      />
    </template>

    <template #toggle="{ open, toggle }">
      <IconMenuToggle
        :open="open"
        class="lg:hidden"
        @click="toggle"
      />
    </template>

    <template #body>
      <AppHeaderBody />
    </template>
  </UHeader>
</template>
