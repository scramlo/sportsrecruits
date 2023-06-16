<script setup lang="ts">
import useGetAthletes from '@/composables/useGetAthletes';
import AthleteSummary from '@/components/AthleteSummary.vue';
import AthleteReportTable from '@/components/AthleteReport/AthleteReportTable.vue';

const { loading, athletes } = useGetAthletes();
</script>

<template>
  <main class="p-5 md:px-20 md:py-10 grid gap-4 md:gap-16">
    <div class="bg-[#09b4ff] w-full h-2" />
    <header
      class="flex items-center md:items-start md:justify-between flex-wrap md:flex-nowrap flex-col-reverse md:flex-row">
      <AthleteSummary class="mt-4" :athlete="athletes[0]" :loading="loading" />
      <div>
        <img src="@/assets/logo.png" alt="SR Insights Logo" class="h-16">
        <h1 class="text-lg text-center md:text-right">Academic Fit Report</h1>
      </div>
    </header>
    <AthleteReportTable :athlete="athletes[0]" :loading="loading" />
    <div class="bg-[#09b4ff] w-full h-2" />
  </main>
</template>