<template>
  <div class="home">
      <b-jumbotron header="AirbnbLike" lead="Location de bien entre particuliers">
        <p>For more information visit website</p>
        <b-button variant="danger" href="#">More Info</b-button>
      </b-jumbotron>
      <component :is="AnnonceCard"></component>

  </div>
</template>

<script>
// @ is an alias to /src
import AnnonceCard from '@/components/AnnonceCard.vue'

export default {
  name: 'Home',
  components: {
    AnnonceCard
  }
}
</script>
