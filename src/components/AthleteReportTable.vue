<script setup lang="ts">
import type { Athlete, Report } from '@/types';
import UITableLoader from './ui/UITableLoader.vue';
import AthleteReportRow from './_AthleteReportRow.vue';

defineProps<{
    athlete: Athlete;
    loading: boolean;
}>();
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