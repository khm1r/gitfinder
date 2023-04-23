<template lang="pug">
.search
    .search-box
        input(
            type="text"
            placeholder="Введите имя пользователя"
            @keydown.enter="getUserInfo"
            v-model="search"
        )
        img(src="@/assets/img/close.jpg", alt="alt" @click="clear")
    button(@click="getUserInfo") НАЙТИ
</template>
<script>
import { mapActions, mapMutations } from "vuex";
export default {
    data() {
        return {
            search: ''
        }
    },
    methods: {
        ...mapActions(['userInfo']),
        ...mapMutations(['clearInfo']),
        getUserInfo(){
            this.userInfo(this.search)
        },
        clear(){
            this.search = ''
            this.clearInfo()
        }
    },
}
</script>
<style lang="scss">
    
</style>