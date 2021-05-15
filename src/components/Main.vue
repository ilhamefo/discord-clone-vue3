<template>
  <div class="flex-1 bg-discord-300 h-full flex flex-col">
    <Header />
    <Content />
  </div>
</template>

<script>
import Content from "./Main/Content.vue";
import Header from "./Main/Header.vue";
export default {
  components: { Header, Content },
};
</script>

<style>
</style>