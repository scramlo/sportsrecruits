<script setup lang="ts">
import type { Athlete } from '@/types';
import UITableLoader from '@/components/ui/UITableLoader.vue';
import AthleteReportRow from '@/components/AthleteReport/_AthleteReportRow.vue';

defineProps<{
    athlete: Athlete;
    loading: boolean;
}>();
</script>
<template>
    <Transition name="fade" :appear="true" v-if="!loading && athlete">
        <section class="grid gap-1 overflow-x-scroll">
            <table class="w-full table-auto text-xs">
                <tbody>
                    <tr>
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
                    <tr class="-translate-y-[17px]">
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
                    <AthleteReportRow :athlete="athlete" />
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
:deep(th:first-child),
:deep(td:first-child) {
    position: sticky;
    left: 0;
}

/* alternate colors between tds */
:deep(tr:nth-child(even) td) {
    background-color: #e7f0fe;
}

:deep(tr:nth-child(odd) td) {
    background-color: white;
}

tr th {
    background-color: black;
    color: white;
}
</style>