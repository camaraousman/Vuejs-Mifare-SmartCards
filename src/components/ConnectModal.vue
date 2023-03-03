<template>
  <div class="flex items-center justify-center h-full">
    <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
      <button class="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" @click="openModal">Connect Reader</button>
    </div>
  </div>

    <Transition>
      <div v-if="show" class="fixed z-10 overflow-y-auto top-0 w-full left-0" id="modal">
        <div class="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div class="fixed inset-0 transition-opacity">
            <div class="absolute inset-0 bg-gray-900 opacity-75" />
          </div>
          <span class="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
          <div class="inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
            <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <!-- Port -->
              <div class="col-span-6 sm:col-span-3">
                <label for="country" class="block text-sm font-medium text-gray-700">Port</label>
                <select id="country" name="country" autocomplete="country-name" class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                  <option>COM7</option>
                  <option>COM6</option>
                  <option>COM5</option>
                </select>
              </div>

              <!-- Baud Rate -->
              <div class="col-span-6 sm:col-span-3">
                <label for="country" class="block text-sm font-medium text-gray-700 mt-5">Baud Rate</label>
                <select id="country" name="country" autocomplete="country-name" class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                  <option>4800</option>
                  <option>9600</option>
                  <option>19200</option>
                </select>
              </div>
            </div>
            <div class="bg-gray-200 px-4 py-3 text-right">
              <button type="button" class="bg-red-900 text-white rounded-md px-3 py-2 text-sm font-medium m-2" @click="closeModal"><i class="fas fa-times"></i> Cancel</button>
              <button type="button" class="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium m-2" @click="connect"><i class="fas fa-plus"></i> Connect</button>
            </div>
          </div>
        </div>
      </div>
    </Transition>


</template>

<script>
  import axios from 'axios'

    export default {
        data() {
            return {
                show: false
            }
        },
        methods: {
            openModal() {
                this.show = true;
            },
            closeModal(){
                this.show = false;
            },
            connect(){
              axios
                  .get('http://localhost:3000/connect')
                  .then(response => {
                    if(response.data.status !== 1){
                      console.error("Connection couldn't be established");
                      return;
                    }

                      this.$store.state.isConnected = true;
                  })
                  .catch(response => {
                    console.error("Error: "+ response)
                  })

            }
        }
    }
</script>

<style scoped>
  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.4s ease;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }
</style>