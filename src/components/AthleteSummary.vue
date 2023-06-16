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

function getColorByAlphabetChunk(name: Athlete['name']) {
    const alphabetChunks = [
        ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm'],
        ['n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
        ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm'],
        ['n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
        ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p'],
        ['q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    ];

    const colors = [
        "#f1603c",
        "#6082fa",
        "#827cb8",
        "#0097a4",
        "#ffe066",
        "#ffa94d"
    ];

    const string = name.toLowerCase();

    for (let i = 0; i < alphabetChunks.length; i++) {
        if (alphabetChunks[i].includes(string.charAt(0))) {
            return colors[i];
        }
    }

    return 'transparent';
}
</script>
<template>
    <Transition name="fade" :appear="true" v-if="!loading && athlete">
        <div class="flex flex-col lg:flex-row gap-4 items-center lg:items-start">
            <!-- circle image thumbnail -->
            <div class="flex items-center h-full">
                <div :style="{ backgroundColor: getColorByAlphabetChunk(athlete.name) }"
                    class="rounded-full flex justify-center items-center text-3xl overflow-hidden h-24 w-24">
                    <span v-if="!athlete.profile_image">{{ getInitials(athlete.name) }}</span>
                    <img v-else :src="athlete.profile_image" :alt="`${athlete.name} Profile Image`">
                </div>
            </div>
            <!-- player meta data -->
            <div class="grid grid-cols-2 gap-1">
                <!-- row 1 player name -->
                <div class="text-center lg:text-start col-span-2 text-[#09b4ff] text-xl font-bold">{{ athlete.name }}</div>
                <!-- row 2 sport and high school -->
                <div class="col-span-2 grid grid-cols-2">
                    <div><span class="font-bold">Sport: </span>{{ athlete.sport }}</div>
                    <div><span class="font-bold">High School: </span>{{ athlete.high_school.name }}</div>
                </div>
                <!-- row 3 class and gpa -->
                <div class="col-span-2 grid grid-cols-2 justify-between">
                    <div><span class="font-bold">Class: </span>{{ athlete.grad_year }}</div>
                    <div><span class="font-bold">GPA: </span>{{ athlete.gpa }}</div>
                </div>
                <!-- row 4 club and desired major -->
                <div class="col-span-2 grid grid-cols-2 justify-between">
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
                    <div class="bg-slate-300 h-full w-full" />
                </div>
            </div>
            <div class="grid grid-cols-2 gap-1 w-96">
                <!-- row 1 player name -->
                <div class="col-span-2 bg-slate-300 rounded h-6 w-full" />
                <!-- row 2 sport and high school -->
                <div class="col-span-2 grid grid-cols-2 gap-3">
                    <div class="bg-slate-300 rounded h-4 w-full" />
                    <div class="bg-slate-300 rounded h-4 w-full" />
                </div>
                <!-- row 3 class and gpa -->
                <div class="col-span-2 grid grid-cols-2 gap-3">
                    <div class="bg-slate-300 rounded h-4 w-full" />
                    <div class="bg-slate-300 rounded h-4 w-full" />
                </div>
                <!-- row 4 club and desired major -->
                <div class="col-span-2 grid grid-cols-2 gap-3">
                    <div class="bg-slate-300 rounded h-4 w-full" />
                    <div class="bg-slate-300 rounded h-4 w-full" />
                </div>
            </div>
        </div>
    </Transition>
</template>