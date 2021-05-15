<template>
  <div
    class="px-2 py-1.5 flex justify-between items-center shadow-custom hover:bg-discord-300 transition duration-300 text-white"
  >
    <div class="left flex items-center">
      <div
        class="flex items-center bg-discord-300 rounded-lg px-2 py-1.5 cursor-pointer"
      >
        <span class="">
          <svg
            width="28"
            height="20"
            viewBox="0 0 28 20"
            class="fill-current text-gray-500"
          >
            <g fill="none" fill-rule="evenodd">
              <path
                fill="currentColor"
                fill-rule="nonzero"
                d="M0.5,0 L0.5,1.5 C0.5,5.65 2.71,9.28 6,11.3 L6,16 L21,16 L21,14 C21,11.34 15.67,10 13,10 C13,10 12.83,10 12.75,10 C8,10 4,6 4,1.5 L4,0 L0.5,0 Z M13,0 C10.790861,0 9,1.790861 9,4 C9,6.209139 10.790861,8 13,8 C15.209139,8 17,6.209139 17,4 C17,1.790861 15.209139,0 13,0 Z"
                transform="translate(2 4)"
              ></path>
              <path
                d="M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z"
              ></path>
            </g>
          </svg>
        </span>

        <span class="font-semibold text-base">Friends</span>
      </div>
      <div class="w-px h-6 bg-gray-600 mx-3"></div>
      <div
        class="py-1 px-2 bg-discord-200 rounded-md font-semibold cursor-pointer mr-3"
      >
        Online
      </div>
      <div
        class="py-1 px-2 hover:bg-discord-200 rounded-md cursor-pointer mr-3 text-gray-400"
      >
        All
      </div>
      <div
        class="py-1 px-2 hover:bg-discord-200 rounded-md cursor-pointer mr-3 text-gray-400"
      >
        Pending
      </div>
      <div
        class="py-1 px-2 hover:bg-discord-200 rounded-md cursor-pointer mr-3 text-gray-400"
      >
        Blocked
      </div>
      <div
        class="py-0.5 px-2 bg-green-500 rounded-md cursor-pointer mr-3 font-semibold"
      >
        Add Friend
      </div>
    </div>
    <div class="right flex items-center">
      <span
        class="mx-2 cursor-pointer"
        v-tooltip.bottom="{
          content: `New Group DM`,
          classes: 'tooltip mt-2',
          delay: 100,
        }"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          class="fill-current text-gray-400 hover:text-gray-300 transition duration-200"
        >
          <path d="M22 2H2v16h16l4 4z" />
        </svg>
      </span>
      <div class="w-px h-6 bg-gray-600 mx-3"></div>
      <span
        class="mx-2 cursor-pointer"
        v-tooltip.bottom="{
          content: `Inbox`,
          classes: 'tooltip mt-2',
          delay: 100,
        }"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          class="fill-current text-gray-400 hover:text-gray-300 transition duration-200"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M21 3H3.01v18H21V3zm-2 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H5V5h14v10z"
          />
        </svg>
      </span>
      <span
        class="mx-2 cursor-pointer"
        v-tooltip.bottom="{
          content: `Help`,
          classes: 'tooltip mt-2',
          delay: 100,
        }"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          class="fill-current text-gray-400 hover:text-gray-300 transition duration-200"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"
          />
        </svg>
      </span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>