<template>
  <div class="px-2 py-1.5 hover:bg-discord-200 group cursor-pointer">
    <div class="flex items-center justify-between rounded-lg px-2 py-1">
      <div class="flex items-center">
        <div class="flex mr-3 relative">
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
            <span class="font-semibold text-base group-hover:text-gray-300"
              >Efo</span
            >
            <span
              class="text-base text-gray-400 group-hover:text-gray-300 hidden group-hover:flex"
              >#{{ "8640" }}</span
            >
          </div>

          <span class="text-sm text-gray-400 capitalize font-semibold"
            >Playing genshin impact</span
          >
        </div>
      </div>

      <div class="right flex">
        <span class="flex p-2 bg-discord-900 rounded-full mx-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="18px"
            width="18px"
            viewBox="0 0 24 24"
            class="fill-current text-white"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"
            />
          </svg>
        </span>
        <span class="flex p-2 bg-discord-900 rounded-full mx-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="18px"
            width="18px"
            viewBox="0 0 24 24"
            class="fill-current text-white"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
            />
          </svg>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>