<script setup lang="ts">
import type { Athlete, Report } from '@/types';
import UITableLoader from './ui/UITableLoader.vue';

defineProps<{
    athlete: Athlete;
    loading: boolean;
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

    if ((schoolGpa - playerGpa) > 0.1) {
        return '#d7737d';
    } else if ((schoolGpa - playerGpa) <= 0.1) {
        return '#c194b5';
    } else if (schoolGpa === playerGpa) {
        return '#b4a7d6';
    } else if ((playerGpa - schoolGpa) < 0.1) {
        return '#a6a8da';
    } else if ((playerGpa - schoolGpa) > 0.1) {
        return '#75ace5';
    }
    return 'transparent';
}
</script>
<template>
    <Transition name="fade" :appear="true" v-if="!loading && athlete">
        <section class="grid gap-16">
            <table class="w-full table-auto text-xs">
                <tbody>
                    <tr class="bg-black text-white">
                        <th>School Name</th>
                        <th>Athletic Div</th>
                        <th>Conference</th>
                        <th>
                            <span>Ranking*</span>
                            <br>
                            <span class="text-[11px]/[11px] font-normal">(DI NCAA)
                                <br>
                                (DII & DIII Hero Sports)
                            </span>
                        </th>
                        <th colspan="5" class="-translate-y-[5px]">GPA**</th>
                        <th>
                            <span>
                                SAT Reading***<br>
                                25%-75%
                            </span>
                        </th>
                        <th>
                            <span>
                                SAT Math***<br>
                                25%-75%
                            </span>
                        </th>
                        <th>
                            <span>
                                ACT Composite***<br>
                                25%-75%
                            </span>
                        </th>
                    </tr>
                    <tr class="text-white -translate-y-[17px]">
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
                    <tr v-for="report in athlete.report" :key="report.school" class="striped -translate-y-[18px]">
                        <td>{{ report.school }}</td>
                        <td>{{ report.division }}</td>
                        <td>{{ report.conference }}</td>
                        <td class="text-center">{{ report.ranking }}</td>
                        <td class="text-center">{{ report.gpa.min.toFixed(2) }}</td>
                        <td class="text-center">{{ report.gpa['25%'].toFixed(2) }}</td>
                        <td class="text-center" :style="{ backgroundColor: getGpaColor(athlete.gpa, report) }">
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
            <div>
                <p class="text-[13px]/[13px]">*Rankings for Division I schools based on NCAA data (www.ncaa.com) and
                    rankings
                    for
                    Division
                    II
                    &amp; III schools are based on data from Hero Sports (www.herosports.com/rankings)</p>
                <p class="text-[13px]/[13px]">** GPA is based on SportsRecruits members who have shown interest in
                    (favorited)
                    the
                    school
                    and
                    have provided their
                    GPA on their profile</p>
                <p class="text-[13px]/[13px]">***SAT and ACT scores based on national data provided by the National Center
                    of
                    Education
                    Statistics- https://nces.ed.gov/ipeds/</p>
            </div>
        </section>
    </Transition>
    <Transition name="fade" :appear="true" v-else>
        <UITableLoader :cols="33" />
    </Transition>
</template>

<style scoped>
table td {
    padding: 0.5rem;
}

table tr:nth-child(even).striped {
    background-color: #e7f0fe;
}
</style>