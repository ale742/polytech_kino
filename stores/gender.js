import {api} from "~/api/index.js";


export const useGenderStore = defineStore('genderS',()=>{
    const genders = ref([]);
    const fetchGenders = async () => {
        const res = await api.get('/genders');
        genders.value = res.data.genders;
    }
    fetchGenders();
    return {
        genders,
    }
});