<template>
<div>
  <b-card-group v-for="good in goods" :key="good.id" deck>
     <AnnonceCard>
        <template v-slot:name>
            {{good.name}}
        </template>
        <template v-slot:description>
            {{good.description}}
        </template>
     </AnnonceCard>
  </b-card-group>
</div>
</template>

<script>
import { mapState } from 'vuex'
import AnnonceCard from '@/components/AnnonceCard.vue'

export default {
  name: 'AnnonceList',
  components: {
    AnnonceCard
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
