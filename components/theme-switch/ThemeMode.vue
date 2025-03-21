<script setup lang="ts">
const colorMode = useColorMode()
</script>

<template>
<div>
  <Select v-model="colorMode.preference">
    <SelectTrigger class="w-[180px]">
      <SelectValue />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectItem value="system">
          System
        </SelectItem>
        <SelectItem value="light">
          Light
        </SelectItem>
        <SelectItem value="dark">
          Dark
        </SelectItem>
        <SelectItem value="sepia">
          Sepia
        </SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
</div>
</template>