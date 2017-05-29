<template>
  <header class="Header" :class="{ 'Header-large': $route.name === 'index' }">
    <h1><%= site_name %></h1>
  </header>
</template>

<script>
export default {
  data() {
    return {
    };
  },

  computed: {
    parentPage() {
      const matches = this.$route.path.match(/\/([^/]+)/);
      return matches ? matches[1] || null : null;
    },
  },

  mounted() {
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" rel="stylesheet/scss">
  @import "assets/styles/common";
</style>
