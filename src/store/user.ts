import { defineStore } from 'pinia'

export const useUserStore = defineStore({
    id: 'user', //id必填,且需要唯一
    state: () => {
        return {
            name: 'gzy',
        }
    },
    actions: {
        updateName(name: string) {
            console.log(name)
            this.name = name
        },
    },
})
