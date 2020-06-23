<template>
<div>
  <div v-for="good in goods" :key="good.id">
     <AnnonceCard :nom="{{good.name}}" ></AnnonceCard>
  </div>
</div>
</template>

<script>
import { mapState } from 'vuex'
import AnnonceCard from '@/components/AnnonceCard.vue'

export default {
  component: {
    name:'AnnonceCard'
  },
  computed: {
    ...mapState(['goods'])
  },
  mounted () {
    this.$store.dispatch('loadGoods')
  }
}
</script>

<style>

</style>
