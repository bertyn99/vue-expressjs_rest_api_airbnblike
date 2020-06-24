<template>
    <div id="annonce-card">
      <b-card
        tag="article"
        style="max-height: 40rem;max-width: 30rem;"
        class="mb-3"
      >
        <b-card-title>
          <slot name="name"></slot>
        </b-card-title>
        <b-card-text>
          <slot name="description"></slot>
        </b-card-text>

        <b-button href="#" variant="primary">Go somewhere</b-button>
      </b-card>
    </div>
</template>


<script>
export default {
  name: 'AnnonceCard'
/*   props: {
    img: Array[Number],
    nom: String,
    description: String,
    Place: String,
    pricePp: Number
  } */
}

</script>

<style scoped>
</style>
