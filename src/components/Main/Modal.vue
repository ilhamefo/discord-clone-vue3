<template>
  <div
    class="bg-black bg-opacity-80 h-screen w-screen fixed top-0 left-0 flex flex-col justify-center items-center text-white"
    @click="toggle"
  >
    <div class="mb-2 font-semibold">Search for servers, channels or DMs</div>

    <div
      class="w-1/3 max-h-96 min-h-1/4 bg-discord-400 rounded-xl flex flex-col justify-between"
      @click.stop
    >
      <div class="flex w-full px-3 pt-3">
        <input
          type="text"
          class="focus:outline-none w-full px-3 py-5 rounded-lg bg-gray-500 shadow-xl text-gray-300 text-xl"
          placeholder="Where you like to go?"
        />
      </div>
      <div class="flex flex-col justify-start items-start overflow-y-auto">
        <span class="font-semibold text-gray-400 text-sm px-3 ml-3 py-1">
          <slot name="type"> Mentions </slot>
        </span>
        <search-results>
          <template #icon>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              class="fill-current text-gray-400 mr-1"
            >
              <path
                d="M3.9 8.26H2V15.2941H3.9V8.26Z"
                fill="currentColor"
              ></path>
              <path
                d="M19.1 4V5.12659L4.85 8.26447V18.1176C4.85 18.5496 5.1464 18.9252 5.5701 19.0315L9.3701 19.9727C9.4461 19.9906 9.524 20 9.6 20C9.89545 20 10.1776 19.8635 10.36 19.6235L12.7065 16.5242L19.1 17.9304V19.0588H21V4H19.1ZM9.2181 17.9944L6.75 17.3826V15.2113L10.6706 16.0753L9.2181 17.9944Z"
                fill="currentColor"
              ></path>
            </svg>
          </template>
          <template #text_channel> general </template>
          <template #notif_count> 29 </template>
          <template #description> Text Channel </template>
          <template #channel_name> Efo Private Channel </template>
        </search-results>
        <search-results>
          <template #text_channel> Mabar </template>
          <template #notif_count> 6 </template>
          <template #description> Text Channel </template>
          <template #channel_name> AmongUs 🥶 </template>
        </search-results>
        <search-results>
          <template #text_channel> Bacot </template>
          <template #notif_count> 21 </template>
          <template #description> 😬 Text Channel </template>
          <template #channel_name> Aing Macan </template>
        </search-results>
      </div>

      <div class="py-2 px-3 w-full border-t border-gray-700 flex items-center">
        <div class="text-green-600 font-semibold text-sm ml-3">PROTIP:</div>
        <div class="text-xs text-gray-500 ml-1">
          Start search with
          <span
            class="ml-1 bg-discord-900 rounded-md text-gray-500 p-0.5 text-xs"
            >@</span
          >
          <span
            class="ml-1 bg-discord-900 rounded-md text-gray-500 p-0.5 text-xs"
            >#</span
          >
          <span
            class="ml-1 bg-discord-900 rounded-md text-gray-500 p-0.5 text-xs"
            >!</span
          >
          <span
            class="ml-1 bg-discord-900 rounded-md text-gray-500 p-0.5 text-xs"
            >*</span
          >
          to narrow results.
        </div>
        <div
          class="link text-xs text-blue-500 cursor-pointer hover:underline ml-1"
        >
          learn more.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import SearchResults from "./SearchResults.vue";

export default {
  components: { SearchResults },
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

<style>
</style>