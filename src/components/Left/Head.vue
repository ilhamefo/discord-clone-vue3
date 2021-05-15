<template>
  <div class="bg-discord-500 text-white flex-1 flex flex-col justify-between">
    <div class="flex flex-col">
      <div
        class="p-2 flex justify-between items-center shadow-custom transition duration-300 cursor-pointer"
      >
        <button
          type="button"
          class="bg-discord-900 rounded-md px-2 w-full text-sm py-1.5 text-left text-gray-500 focus:outline-none"
          @click="toggle"
        >
          Find or start a conversation
        </button>
        <teleport to="#modal">
          <modal v-if="state.showModal"></modal>
        </teleport>
      </div>
      <div class="p-2 grid grid-flow-row auto-rows-max gap-1">
        <div
          class="flex items-center bg-discord-300 rounded-lg px-2 py-2 cursor-pointer"
        >
          <span class="mr-3">
            <svg
              width="28"
              height="20"
              viewBox="0 0 28 20"
              class="fill-current text-white"
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
        <div
          class="flex items-center hover:bg-discord-300 rounded-lg px-2 py-2 cursor-pointer"
        >
          <span class="mr-3">
            <svg
              width="28"
              height="20"
              viewBox="0 0 28 20"
              class="fill-current text-gray-400"
            >
              <path
                fill="currentColor"
                d="M2.98966977,9.35789159 C2.98966977,9.77582472 2.63442946,10.1240466 2.20807287,10.1240466 L1.78171628,10.1240466 C1.35535969,10.1240466 0.999948837,9.77582472 0.999948837,9.35789159 C0.999948837,8.93995846 1.35535969,8.59173658 1.78171628,8.59173658 L2.20807287,8.59173658 C2.63442946,8.59173658 2.98966977,8.93995846 2.98966977,9.35789159 Z M22.2467643,9.14892503 C24.0942527,12.9800344 22.3888264,17.5772989 18.3384388,19.3882867 C14.4302837,21.1297305 9.74036124,19.457998 7.9638186,15.6268886 C7.60857829,14.8607335 7.3954,14.0248673 7.32428372,13.189001 L5.76091938,13.189001 C5.33456279,13.189001 4.97932248,12.840612 4.97932248,12.4226788 C4.97932248,12.0047457 5.33456279,11.6565238 5.76091938,11.6565238 L8.03493488,11.6565238 C8.46129147,11.6565238 8.81653178,11.3083019 8.81653178,10.8903688 C8.81653178,10.4724357 8.46129147,10.1240466 8.03493488,10.1240466 L4.41090388,10.1240466 C3.98454729,10.1240466 3.62913643,9.77582472 3.62913643,9.35789159 C3.62913643,8.93995846 3.98454729,8.59173658 4.41090388,8.59173658 L9.45606667,8.59173658 C9.88242326,8.59173658 10.2376636,8.24334752 10.2376636,7.82541439 C10.2376636,7.40748126 9.88242326,7.05925937 9.45606667,7.05925937 L7.3954,7.05925937 C6.75586512,7.05925937 6.18727597,6.57161499 6.18727597,5.87517123 C6.18727597,5.24827153 6.68474884,4.69091591 7.3954,4.69091591 L15.4250589,4.69091591 C18.267493,4.8303384 20.9676946,6.43235968 22.2467643,9.14892503 Z M13.2662961,8.38056332 C11.0193969,9.3919615 10.0341721,11.9973566 11.065955,14.1998642 C12.097738,16.4023718 14.755645,17.3681317 17.0025442,16.3567335 C19.249614,15.3453354 20.2346682,12.7399402 19.2028853,10.5374326 C18.1711023,8.33492503 15.5131953,7.36916515 13.2662961,8.38056332 Z M16.8462589,9.84548582 L18.2673907,12.2138293 C18.338507,12.3530846 18.338507,12.4227958 18.2673907,12.5620512 L16.8462589,14.9303946 C16.7751426,15.0696499 16.6330806,15.0696499 16.5619643,15.0696499 L13.7906465,15.0696499 C13.6485845,15.0696499 13.5774682,14.9999387 13.5065225,14.9303946 L12.0852202,12.5620512 C12.0142744,12.4227958 12.0142744,12.3530846 12.0852202,12.2138293 L13.5065225,9.84548582 C13.5774682,9.7062305 13.7197008,9.7062305 13.7906465,9.7062305 L16.5619643,9.7062305 C16.7041969,9.63651925 16.7751426,9.7062305 16.8462589,9.84548582 Z"
              ></path>
            </svg>
          </span>

          <span class="font-semibold text-base text-gray-400">Nitro</span>
        </div>
      </div>

      <!--  -->
      <div class="flex items-center justify-between mx-4 mt-3 group">
        <span
          class="uppercase text-xs font-semibold text-gray-400 group-hover:text-gray-300"
        >
          Direct Messages
        </span>
        <svg
          width="18"
          height="18"
          viewBox="0 0 28 20"
          class="fill-current text-gray-400"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
        </svg>
      </div>

      <div class="flex flex-col p-3">
        <div
          class="flex items-center justify-between hover:bg-discord-300 rounded-lg px-2 py-1 cursor-pointer group"
        >
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

            <span
              class="font-semibold text-base text-gray-400 group-hover:text-gray-300"
              >Efo</span
            >
          </div>

          <span class="hidden group-hover:flex">
            <svg
              width="22"
              height="22"
              viewBox="0 0 28 20"
              class="fill-current text-gray-400 hover:text-gray-300"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
    <div class="bg-discord-400 px-2 py-2">
      <div class="flex justify-between items-center">
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
              class="absolute right-0 bottom-0 bg-discord-500 rounded-full p-0.5 transform -rotate-90"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                enable-background="new 0 0 24 24"
                height="14px"
                width="14px"
                viewBox="0 0 24 24"
                fill="#FAA61A"
              >
                <rect fill="none" height="24" width="24" />
                <path
                  d="M12,3c-4.97,0-9,4.03-9,9s4.03,9,9,9s9-4.03,9-9c0-0.46-0.04-0.92-0.1-1.36c-0.98,1.37-2.58,2.26-4.4,2.26 c-2.98,0-5.4-2.42-5.4-5.4c0-1.81,0.89-3.42,2.26-4.4C12.92,3.04,12.46,3,12,3L12,3z"
                />
              </svg>
            </span>
          </div>

          <div class="flex flex-col justify-center leading-3">
            <span
              class="font-semibold text-base text-gray-200 group-hover:text-gray-300"
              >Efo</span
            >
            <span class="text-xs text-gray-300">#{{ `8640` }}</span>
          </div>
        </div>
        <div class="flex">
          <span class="icon-wrapper">
            <svg aria-hidden="false" width="20" height="20" viewBox="0 0 24 24">
              <path
                d="M6.7 11H5C5 12.19 5.34 13.3 5.9 14.28L7.13 13.05C6.86 12.43 6.7 11.74 6.7 11Z"
                fill="currentColor"
              ></path>
              <path
                d="M9.01 11.085C9.015 11.1125 9.02 11.14 9.02 11.17L15 5.18V5C15 3.34 13.66 2 12 2C10.34 2 9 3.34 9 5V11C9 11.03 9.005 11.0575 9.01 11.085Z"
                fill="currentColor"
              ></path>
              <path
                d="M11.7237 16.0927L10.9632 16.8531L10.2533 17.5688C10.4978 17.633 10.747 17.6839 11 17.72V22H13V17.72C16.28 17.23 19 14.41 19 11H17.3C17.3 14 14.76 16.1 12 16.1C11.9076 16.1 11.8155 16.0975 11.7237 16.0927Z"
                fill="currentColor"
              ></path>
              <path
                d="M21 4.27L19.73 3L3 19.73L4.27 21L8.46 16.82L9.69 15.58L11.35 13.92L14.99 10.28L21 4.27Z"
                class="strikethrough-1n4ekb"
                fill="#ED4245"
              ></path>
            </svg>
          </span>
          <span class="icon-wrapper">
            <svg aria-hidden="false" width="20" height="20" viewBox="0 0 24 24">
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path
                  d="M12 2.00305C6.486 2.00305 2 6.48805 2 12.0031V20.0031C2 21.1071 2.895 22.0031 4 22.0031H6C7.104 22.0031 8 21.1071 8 20.0031V17.0031C8 15.8991 7.104 15.0031 6 15.0031H4V12.0031C4 7.59105 7.589 4.00305 12 4.00305C16.411 4.00305 20 7.59105 20 12.0031V15.0031H18C16.896 15.0031 16 15.8991 16 17.0031V20.0031C16 21.1071 16.896 22.0031 18 22.0031H20C21.104 22.0031 22 21.1071 22 20.0031V12.0031C22 6.48805 17.514 2.00305 12 2.00305Z"
                  fill="currentColor"
                ></path>
              </svg>
            </svg>
          </span>
          <span class="icon-wrapper">
            <svg aria-hidden="false" width="20" height="20" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M19.738 10H22V14H19.739C19.498 14.931 19.1 15.798 18.565 16.564L20 18L18 20L16.565 18.564C15.797 19.099 14.932 19.498 14 19.738V22H10V19.738C9.069 19.498 8.203 19.099 7.436 18.564L6 20L4 18L5.436 16.564C4.901 15.799 4.502 14.932 4.262 14H2V10H4.262C4.502 9.068 4.9 8.202 5.436 7.436L4 6L6 4L7.436 5.436C8.202 4.9 9.068 4.502 10 4.262V2H14V4.261C14.932 4.502 15.797 4.9 16.565 5.435L18 3.999L20 5.999L18.564 7.436C19.099 8.202 19.498 9.069 19.738 10ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
              ></path>
            </svg>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted } from "vue";
import Modal from "../Main/Modal.vue";
import { useStore } from "vuex";
export default {
  components: { Modal },
  setup() {
    const store = useStore();
    const state = computed(() => store.state.test);

    const toggle = () => {
      store.commit("test/toggleModal");
    };

    return {
      state,
      toggle,
    };
  },
};
</script>

<style scoped>
</style>