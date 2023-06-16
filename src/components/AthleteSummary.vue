<script setup lang="ts">
import type { Athlete } from '@/types';

defineProps<{
    athlete: Athlete;
    loading: boolean;
}>();

function getInitials(name: string) {
    // split the name into parts
    const parts = name.split(' ');
    // get the first name (regardless of it has many parts, like "Mary Anne")
    const first = parts[0];
    // get the last name
    const last = parts[parts.length - 1];
    // return the first letter of each name, capitalized
    return `${first[0].toUpperCase()}${last[0].toUpperCase()}`;
}
</script>
<template>
    <Transition name="fade" :appear="true" v-if="!loading && athlete">
        <div class="flex gap-4">
            <!-- circle image thumbnail -->
            <div class="flex items-center h-full">
                <div class="bg-gray-200 rounded-full flex justify-center items-center text-3xl overflow-hidden h-24 w-24">
                    <span v-if="!athlete.profile_image">{{ getInitials(athlete.name) }}</span>
                    <img v-else :src="athlete.profile_image" :alt="`${athlete.name} Profile Image`">
                </div>
            </div>
            <!-- player meta data -->
            <div class="grid grid-cols-2 gap-1">
                <!-- row 1 player name -->
                <div class="col-span-2 text-[#09b4ff] text-[16px]/[16px] font-bold">{{ athlete.name }}</div>
                <!-- row 2 sport and high school -->
                <div class="col-span-2 grid grid-cols-2 text-[12px]/[12px]">
                    <div><span class="font-bold">Sport: </span>{{ athlete.sport }}</div>
                    <div><span class="font-bold">High School: </span>{{ athlete.high_school.name }}</div>
                </div>
                <!-- row 3 class and gpa -->
                <div class="col-span-2 grid grid-cols-2 text-[12px]/[12px] justify-between">
                    <div><span class="font-bold">Class: </span>{{ athlete.grad_year }}</div>
                    <div><span class="font-bold">GPA: </span>{{ athlete.gpa }}</div>
                </div>
                <!-- row 4 club and desired major -->
                <div class="col-span-2 grid grid-cols-2 text-[12px]/[12px] justify-between">
                    <div><span class="font-bold">Club: </span>{{ athlete.club.name }}</div>
                    <div><span class="font-bold">Desired Major: </span>{{ athlete.major }}</div>
                </div>
            </div>
        </div>
    </Transition>
    <Transition name="fade" :appear="true" v-else>
        <!-- Skeleton Loader -->
        <div class="flex gap-4 animate-pulse">
            <div class="flex items-center h-full">
                <div class="rounded-full flex justify-center items-center overflow-hidden h-32 w-32">
                    <div class="bg-slate-700 h-full w-full"></div>
                </div>
            </div>
            <div class="grid grid-cols-2 gap-1 w-96">
                <!-- row 1 player name -->
                <div class="col-span-2 bg-slate-700 rounded h-6 w-full" />
                <!-- row 2 sport and high school -->
                <div class="col-span-2 grid grid-cols-2 gap-3">
                    <div class="bg-slate-700 rounded h-4 w-full" />
                    <div class="bg-slate-700 rounded h-4 w-full" />
                </div>
                <!-- row 3 class and gpa -->
                <div class="col-span-2 grid grid-cols-2 gap-3">
                    <div class="bg-slate-700 rounded h-4 w-full" />
                    <div class="bg-slate-700 rounded h-4 w-full" />
                </div>
                <!-- row 4 club and desired major -->
                <div class="col-span-2 grid grid-cols-2 gap-3">
                    <div class="bg-slate-700 rounded h-4 w-full" />
                    <div class="bg-slate-700 rounded h-4 w-full" />
                </div>
            </div>
        </div>
    </Transition>
</template>