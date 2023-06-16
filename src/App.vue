<script setup lang="ts">
import useGetAthletes from '@/composables/useGetAthletes';
import AthleteSummary from './components/AthleteSummary.vue';
import AthleteReportTable from './components/AthleteReportTable.vue';

const { loading, athletes } = useGetAthletes();
</script>

<template>
  <main class="px-40 py-20 grid gap-16">
    <div class="bg-[#09b4ff] w-full h-2" />
    <header class="flex justify-between">
      <AthleteSummary :athlete="athletes[0]" :loading="loading" />
      <div>
        <img src="@/assets/logo.png" alt="SR Insights Logo" class="h-16">
        <h1 class="text-[14px]/[14px]">Academic Fit Report</h1>
      </div>
    </header>
    <AthleteReportTable :athlete="athletes[0]" :loading="loading" />
  </main>
</template>