<template>
<div>
  <main>
    <div v-if="this.$store.state.isConnected">
      <the-form></the-form>
    </div>

    <div v-else>
      <connect-modal></connect-modal>
    </div>


  </main>
</div>

</template>

<script>
import TheForm from './TheForm'
import ConnectModal from './ConnectModal'

  export default {
  components: {
    TheForm,
    ConnectModal
  },
    data() {
      return {
        currentComponent: 'connect-modal',
      }
    },
    methods: {

    },
  }
</script>
