<template>
  <div>
    <div :class="['shape', { 'shape--transparent': isTransparent}]"
    :style="`background:${color}`"></div>
    <svg :class="['shape__edge shape__edge--desktop', { 'shape--transparent': isTransparent}]" viewBox="0 0 2532 516" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M1265.647.004L2531.282 292.71v222.66H.012L1265.647.004z" :fill="color"/></svg>
    <svg :class="['shape__edge shape__edge--mobile', { 'shape--transparent': isTransparent}]" viewBox="0 0 809 258" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M404.075 0l404.07 257.5H0L404.075 0z" :fill="color"/></svg>
  </div>
</template>
<script>
export default {
  props: ['color', 'isTransparent'],
};
</script>
<style scoped lang="scss">
@import "@/assets/global.scss";

.shape{
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 500px;
  background: $blue;
  clip-path: polygon(50% 75%, 0% 100%, 100% 100%);
  animation: 0.5s ease 0s 1 slideInShape;
  // edge hack, ugh
  z-index: -1;
  @supports (-ms-ime-align: auto) {
    display: none;
  }
  &__edge{
    display: none;
    position: absolute;
    bottom: 0;
    width: 100%;
    margin: 0 auto;
    animation: 0.5s ease 0s 1 slideInShape;
    z-index: -1;
    // edge hack, ugh
    @supports (-ms-ime-align: auto) {
      display: block;
      &--mobile{
        display: block;
        @include breakpoint(phone){
          display: none;

        }
      }
      &--desktop{
        display: none;
        @include breakpoint(phone){
          display: block;
        }
      }
    }
  }
  @include breakpoint(phone){
    height: 75%;
    min-height: 400px;
    clip-path: polygon(50% 55%, 100% 80%, 100% 100%, 0% 100%);
  }
  // prevent overlap on short screens
  @media screen and (max-height: 550px){
    clip-path: polygon(50% 75%, 0% 100%, 100% 100%);
  }
  @media screen and (max-height: 350px){
    clip-path: polygon(50% 90%, 0% 100%, 100% 100%);
  }
  &--transparent{
    opacity: 0.1;
  }
}

</style>
