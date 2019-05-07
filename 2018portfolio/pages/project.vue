<template>
  <div class="content__project" :style="{background:config[$route.name].primary}">
    <case :config="config[$route.name]"/>
  </div>
</template>

<script>
import Case from '@/components/Case.vue';
import config from '@/assets/config';

export default {
  created() {
    // Google should pick this up even though its client side rendered 
    if(process.browser){
      document.title = config[this.$route.name].formattedName;
      document.head.querySelector('meta[name=description]').content = config[this.$route.name].summary;
    }
  },
  components: {
    case: Case,
  },
  data() {
    return {
      config,
    };
  },
};
</script>
<style scoped lang="scss">
@import "@/assets/global.scss";


.content{
  &__project{
    height: fit-content;
    padding: 5vw;
    flex: 1 0 calc(75% - 5vw); // was 10
    position: relative;
    @include breakpoint(desktop){
      min-height: 100vh;
      // max-width: calc(75% - 10vw); // safari
      // max-width: calc(75% - 2.5vw); //half of 5vw
    }
  }
}
// firefox hack to allow fit-content to work
@-moz-document url-prefix() {
  @include breakpoint(desktop){
    .content__project{
      display: table !important;
      max-width: 75%;
    }
  }
}
// edge hack, same reason...
@supports (-ms-ime-align: auto) {
  @include breakpoint(desktop){
    .content__project{
      display: table;
      max-width: 75%;
    }
  }
}
</style>
