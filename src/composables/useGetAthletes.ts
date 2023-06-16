import { ref, type Ref } from 'vue';
import AthleteData from '@/assets/data.json';
import type { Athletes } from '@/types';

export default function useGetAthleteData() {
  const loading = ref(true);
  const athletes: Ref<Athletes> = ref([]);

  // use a setTimeout to simulate loading state
  setTimeout(() => {
    athletes.value = AthleteData.data;
    loading.value = false;
  }, 2000);

  return {
    loading,
    athletes
  };
}
