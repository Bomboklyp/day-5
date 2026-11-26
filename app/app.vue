<script setup lang="ts">
const { hydrate } = useWorkflow();
onMounted(hydrate);
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLoadingIndicator color="#6458e8" />
    <NuxtLayout><NuxtPage /></NuxtLayout>
    <AppToast />
  </div>
</template>
