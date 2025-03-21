<script setup lang="ts">
import ThemeMode from "~/components/theme-switch/ThemeMode.vue";


</script>

<template>
  <div class="flex flex-col h-screen w-full">
    <Header/>

    <slot/>

  </div>
</template>
