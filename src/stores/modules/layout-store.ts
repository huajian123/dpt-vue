import { defineStore } from 'pinia'
import { ref } from "vue";

export const  useCollapsedStore = defineStore('collapsedStore',()=>{
    const collapsed = ref<boolean>(false)
    const setCollapsed = (value: boolean)=>{
        collapsed.value = value
    }
    return {
        collapsed,
      setCollapsed
    }
})
