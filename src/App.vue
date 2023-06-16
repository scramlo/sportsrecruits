<script setup lang="ts">
import useGetAthletes from '@/composables/useGetAthletes';
import AthleteSummary from './components/AthleteSummary.vue';

const { loading, athletes } = useGetAthletes();
</script>

<template>
  <main class="px-40 py-20">
    <header class="flex justify-between">
      <AthleteSummary :athlete="athletes[0]" :loading="loading" />
      <Transition name="fade" :appear="true">
        <div>
          <img src="@/assets/logo.png" alt="SR Insights Logo" class="h-16">
          <h1 class="text-lg font-light">Academic Fit Report</h1>
        </div>
      </Transition>
    </header>
  </main>
</template>
