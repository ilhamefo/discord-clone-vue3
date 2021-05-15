<template>
  <div class="flex items-start">
    <div
      class="p-5 text-white grid grid-flow-row gap-1 divide-y divide-gray-600 w-9/12"
    >
      <div class="uppercase text-sm font-semibold text-gray-400">
        online - 1
      </div>
      <online-user></online-user>
    </div>
    <div class="flex-1 p-5 flex flex-col h-full border-l border-gray-600">
      <div class="uppercase text-sm font-semibold text-gray-400">
        Active now
      </div>
      <div
        class="flex items-center justify-between px-2 py-4 bg-discord-500 mt-2 rounded-lg cursor-pointer hover:bg-discord-900"
      >
        <div class="flex">
          <div class="flex items-center mr-3 relative">
            <span
              class="rounded-full h-9 w-9 bg-pink-400 flex justify-center items-center overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1620979673980-7ec12c260d38?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=50&q=80"
                class="object-cover h-10 w-full"
              />
            </span>
            <span
              class="h-2.5 w-2.5 rounded-full bg-green-400 absolute right-0 bottom-0 ring ring-discord-500"
            ></span>
          </div>
          <div class="flex flex-col">
            <div class="flex">
              <span
                class="font-semibold text-base group-hover:text-gray-300 text-gray-400"
                >Efo</span
              >
              <span
                class="text-base text-gray-400 group-hover:text-gray-300 hidden group-hover:flex"
                >#{{ "8640" }}</span
              >
            </div>
            <span class="text-sm text-gray-400 capitalize font-semibold"
              >genshin impact - 3 days</span
            >
          </div>
        </div>

        <div class="flex h-7 w-7 rounded-lg overflow-hidden">
          <img
            src="https://cdn.discordapp.com/app-icons/762434991303950386/eb0e25b739e4fa38c1671a3d1edcd1e0.png?size=64&keep_aspect_ratio=false"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import OnlineUser from "./OnlineUser.vue";
export default {
  components: { OnlineUser },
};
</script>

<style>
</style>