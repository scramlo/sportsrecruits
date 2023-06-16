<script setup lang="ts">
import type { Athlete } from '@/types';
import AthleteReportGpaCell from './_AthleteReportGpaCell.vue';

defineProps<{
    athlete: Athlete;
}>();
</script>

<template>
    <tr v-for="report in athlete.report" :key="report.school" class="striped -translate-y-[18px]">
        <td>{{ report.school }}</td>
        <td>{{ report.division }}</td>
        <td>{{ report.conference }}</td>
        <td class="text-center">{{ report.ranking }}</td>
        <td class="text-center">{{ report.gpa.min.toFixed(2) }}</td>
        <td class="text-center">{{ report.gpa['25%'].toFixed(2) }}</td>
        <AthleteReportGpaCell :athlete="athlete" :report="report" />
        <td class="text-center">{{ report.gpa['75%'].toFixed(2) }}</td>
        <td class="text-center">{{ report.gpa.max.toFixed(2) }}</td>
        <td class="text-center">{{ report.sat.reading.min }}-{{ report.sat.reading.max }}</td>
        <td class="text-center">{{ report.sat.math.min }}-{{ report.sat.math.max }}</td>
        <td class="text-center">{{ report.act.min }}-{{ report.act.max }}</td>
    </tr>
</template>

<style scoped>
table td {
    padding: 0.5rem;
}

table tr:nth-child(even).striped {
    background-color: #e7f0fe;
}
</style>