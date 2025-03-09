<script setup lang="ts">
const online = useOnline()
</script>

<template>
  <main class="px-10 py-20 text-center">
    <div class="min-h-[85vh]">
      <slot />
    </div>
    <Footer />
    <PageView v-if="online" />
    <div v-else text-gray:80>
      You're offline
    </div>

    <div class="text-sm mx-auto mt-5 text-center opacity-25">
      [Home Layout]
    </div>
  </main>
</template>
