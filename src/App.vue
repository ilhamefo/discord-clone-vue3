<template>
  <div class="root">
    <left-section></left-section>
    <Main />
  </div>
</template>

<script>
import LeftSection from "./components/LeftSection.vue";
import Main from "./components/Main.vue";
export default {
  components: { LeftSection, Main },
};
</script>

<style>
</style>