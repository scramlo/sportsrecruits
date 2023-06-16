<script setup lang="ts">
import useGetAthletes from '@/composables/useGetAthletes';
import AthleteSummary from '@/components/AthleteSummary.vue';
import AthleteReportTable from '@/components/AthleteReport/AthleteReportTable.vue';

const { loading, athletes } = useGetAthletes();
</script>

<template>
  <main class="p-5 lg:px-20 lg:py-10 grid gap-4 lg:gap-16">
    <div class="bg-[#09b4ff] w-full h-2" />
    <header
      class="flex items-center lg:items-start lg:justify-between flex-wrap lg:flex-nowrap flex-col-reverse lg:flex-row">
      <AthleteSummary class="mt-4" :athlete="athletes[0]" :loading="loading" />
      <div>
        <img src="@/assets/logo.png" alt="SR Insights Logo" class="h-16">
        <h1 class="text-lg text-center lg:text-right">Academic Fit Report</h1>
      </div>
    </header>
    <AthleteReportTable :athlete="athletes[0]" :loading="loading" />
    <div class="bg-[#09b4ff] w-full h-2" />
  </main>
</template>