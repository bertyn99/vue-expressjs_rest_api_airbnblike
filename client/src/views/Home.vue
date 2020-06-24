<template>
  <div class="home">
      <b-jumbotron header="AirbnbLike" lead="Location de bien entre particuliers">
        <p>For more information visit website</p>
        <b-button variant="danger" href="#">More Info</b-button>
      </b-jumbotron>
      <AnnonceList></AnnonceList>
  </div>
</template>

<script>
// @ is an alias to /src
import AnnonceList from '@/components/AnnonceList.vue'
import { mapState } from 'vuex'

export default {
  name: 'Home',
  components: {
    AnnonceList
  },
  computed: { ...mapState(['goods', 'loading']) }
}
</script>
