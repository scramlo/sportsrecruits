<script setup lang="ts">
import type { Athlete, Report } from '@/types';

defineProps<{
    athlete: Athlete;
    report: Report;
}>();

function getGpaColor(gpa: Athlete['gpa'], report: Report) {
    const playerGpa = gpa;
    const schoolGpa = report.gpa['50%'];

    /* 
    - school gpa above the player's gpa by more than 0.10 color is #d7737d
    - school gpa above the player's gpa by up to 0.10 color is #c194b5
    - school gpa equal to the player's gpa color is #b4a7d6
    - school gpa under the player's  gpa by less than 0.10 color is #a6a8da
    - school gpa under the player's gpa by more than 0.10 color is #75ace5
    */

    if (schoolGpa > playerGpa + .10) {
        return '#d7737d';
    } else if (schoolGpa > playerGpa && schoolGpa <= playerGpa + .10) {
        return '#c194b5';
    } else if (schoolGpa === playerGpa) {
        return '#b4a7d6';
    } else if (schoolGpa < playerGpa && schoolGpa >= playerGpa - .10) {
        return '#a6a8da';
    } else if (schoolGpa < playerGpa - .10) {
        return '#75ace5';
    }
}
</script>
<template>
    <td class="text-center" :style="{ backgroundColor: getGpaColor(athlete.gpa, report) }">
        {{ report.gpa['50%'].toFixed(2) }}
    </td>
</template>