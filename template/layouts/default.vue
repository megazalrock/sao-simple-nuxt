<template>
  <div class="layout">
    <site-header></site-header>

    <transition name="router-content">
      <nuxt/>
    </transition>

    <site-footer></site-footer>
  </div>
</template>

<script>
import SiteHeader from '~components/site_header.vue';
import SiteFooter from '~components/site_footer.vue';

export default {
  components: {
    SiteHeader,
    SiteFooter,
  },
};
</script>
