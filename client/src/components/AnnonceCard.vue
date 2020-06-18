<template>
    <div id="annonce-card">
      <b-card
        tag="article"
        style="max-height: 40rem;max-width: 30rem;"
        class="mb-3"
      >
        <b-card-title>{{nom}}</b-card-title>
        <b-card-text>
          {{ description }}
        </b-card-text>

        <b-button href="#" variant="primary">Go somewhere</b-button>
      </b-card>
    </div>
</template>

import  from ''
<script>
export default {
  name: 'AnnonceCard',
  props: {
    img: Array[Number],
    nom: String,
    description: String,
    Place: String,
    pricePp: Number
  }
}

</script>

<style scoped>
</style>
