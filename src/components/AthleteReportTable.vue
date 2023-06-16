<script setup lang="ts">
import type { Athlete, Report } from '@/types';

defineProps<{
    athlete: Athlete;
    loading: boolean;
}>();

function getGpaColor(report: Report) {
    const playerGpa = report.gpa['50%'];
    const schoolGpa = report.gpa.max;

    /* 
    - school gpa above the player's gpa by more than 0.10 color is #d7737d
    - school gpa above the player's gpa by up to 0.10 color is #c194b5
    - school gpa equal to the player's gpa color is #b4a7d6
    - school gpa under the player's  gpa by less than 0.10 color is #a6a8da
    - school gpa under the player's gpa by more than 0.10 color is #75ace5
    */

    if (schoolGpa - playerGpa > 0.1) {
        return '#d7737d';
    } else if (schoolGpa - playerGpa <= 0.1 && schoolGpa - playerGpa > 0) {
        return '#c194b5';
    } else if (schoolGpa === playerGpa) {
        return '#b4a7d6';
    } else if (playerGpa - schoolGpa < 0.1 && playerGpa - schoolGpa > 0) {
        return '#a6a8da';
    } else {
        return '#75ace5';
    }
}
</script>
<template>
    <table class="w-full table-auto" v-if="!loading && athlete">
        <tbody>
            <tr class="bg-black text-white">
                <th class="text-sm">School Name</th>
                <th class="text-sm">Athletic Div</th>
                <th class="text-sm">Conference</th>
                <th class="text-sm">
                    <span>Ranking*</span>
                    <br>
                    <span class="font-thin">(DI NCAA)
                        <br>
                        (DII & DIlI Hero Sports)
                    </span>
                </th>
                <th class="text-sm" colspan="5">GPA**</th>
                <th class="text-sm">
                    <span>
                        SAT Reading***<br>
                        25%-75%
                    </span>
                </th>
                <th class="text-sm">
                    <span>
                        SAT Math***<br>
                        25%-75%
                    </span>
                </th>
                <th class="text-sm">
                    <span>
                        ACT Composite***<br>
                        25%-75%
                    </span>
                </th>
            </tr>
            <tr class="bg-black text-white">
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th>Min</th>
                <th>25%</th>
                <th>50%</th>
                <th>75%</th>
                <th>Max</th>
                <th></th>
                <th></th>
                <th></th>
            </tr>
            <tr v-for="report in athlete.report" :key="report.school" class="striped">
                <td>{{ report.school }}</td>
                <td>{{ report.division }}</td>
                <td>{{ report.conference }}</td>
                <td class="text-center">{{ report.ranking }}</td>
                <td class="text-center">{{ report.gpa.min.toFixed(2) }}</td>
                <td class="text-center">{{ report.gpa['25%'].toFixed(2) }}</td>
                <td class="text-center" :style="{ backgroundColor: getGpaColor(report) }">
                    {{ report.gpa['50%'].toFixed(2) }}
                </td>
                <td class="text-center">{{ report.gpa['75%'].toFixed(2) }}</td>
                <td class="text-center">{{ report.gpa.max.toFixed(2) }}</td>
                <td class="text-center">{{ report.sat.reading.min }}-{{ report.sat.reading.max }}</td>
                <td class="text-center">{{ report.sat.math.min }}-{{ report.sat.math.max }}</td>
                <td class="text-center">{{ report.act.min }}-{{ report.act.max }}</td>
            </tr>
        </tbody>
    </table>
</template>

<style scoped>
table td {
    padding: 0.5rem;
}

table tr:nth-child(even).striped {
    background-color: #e7f0fe;
}
</style>