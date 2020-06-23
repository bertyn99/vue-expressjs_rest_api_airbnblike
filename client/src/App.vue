<template>
  <div id="app">
    <div id="nav">
      <b-navbar toggleable="lg" type="dark" variant="danger" srticky>
        <b-navbar-brand href="#"> <router-link to="/">Home</router-link> </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-navbar-nav>
          <b-nav-item href="#"> <router-link to="/goods">goods</router-link> </b-nav-item>
          </b-navbar-nav>
          <template>
            <b-button v-b-modal.modal-0.5><em>User</em> </b-button>
            <b-modal id="modal-1" title="BootstrapVue">
              <p class="my-4">Hello from modal!</p>
            </b-modal>
          </template>
            <b-nav-item-dropdown    right>
                <template v-slot:button-content>
                  <em>User</em>
                </template>
              <b-dropdown-item href="#"><router-link to="/user">Profile</router-link></b-dropdown-item>
              <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
        </b-navbar-nav>
        </b-collapse>
      </b-navbar>

    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #f3f3f3;
}
</style>
<script>

export default {
  prop: {
    user: Boolean
  },
  method: {
    isConnected (user) {
      return false
    }
  }
}
</script>
