<template>
  <div class="root">
    <left-section></left-section>
    <Main />
  </div>
</template>

<script>
import LeftSection from "./components/LeftSection.vue";
import Main from "./components/Main.vue";
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  components: { LeftSection, Main },
  setup() {
    const store = useStore();
    const test = computed(() => store.state.test);

    return {
      test,
    };
  },
};
</script>

<style>
</style>