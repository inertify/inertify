<script setup lang="ts">
const appConfig = useAppConfig()

const links = computed(() => appConfig.navigation?.links || [])
</script>

<template>
  <UNavigationMenu
    :items="links"
    orientation="vertical"
    variant="link"
    class="-mx-2.5"
  />
</template>
