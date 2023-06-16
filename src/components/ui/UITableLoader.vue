<script setup lang="ts">
defineProps<{
    cols: number;
}>();
</script>

<template>
    <!-- Skeleton Loader -->
    <div class="flex gap-4 animate-pulse">
        <div class="grid grid-cols-6 gap-1 w-full">
            <div class="col-span-6 bg-slate-300 rounded h-6 w-full" />
            <!-- eslint-disable-next-line -->
            <div v-for="col in cols" class="col-span-2 bg-slate-300 rounded h-6 w-full" />
        </div>
    </div>
</template>