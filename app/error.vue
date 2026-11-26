<script setup lang="ts">
const props = defineProps<{
  error: { statusCode?: number; message?: string };
}>();
</script>
<template>
  <main class="global-error">
    <ErrorContent :code="props.error.statusCode ?? 500" />
  </main>
</template>
