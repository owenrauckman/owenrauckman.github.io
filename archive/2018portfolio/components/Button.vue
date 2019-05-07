<template>
  <router-link :to="{name: props.page }" class="button">
    <span :class="`button__span button__span--${props.color}`">{{props.text}}</span>
  </router-link>
</template>
<script>
export default {
  props: ['props'],
};
</script>

<style scoped lang="scss">
@import "@/assets/global.scss";
.button{
  font-family: $cabin;
  text-transform: uppercase;
  color: $blue;
  font-weight: 600;
  letter-spacing: 2px;
  font-size: 1rem;
  @include breakpoint(desktop){
    font-size: 1.25vw;
  }
  &__span{
    position: relative;
    &:after{
      position: absolute;
      content: '';
      height: 1rem;
      width: 1rem;
      right: -2rem;
      transform: translateX(0);
      transition: transform ease-in-out 0.2s;
      @include breakpoint(desktop){
        height: 1.5vw;
        width: 1.5vw;
      }
    }
    &--white{
      color: white;
      &:after{
        background: url('../assets/cta-arrow-white.svg');
      }
    }
    &--blue{
      color: $blue;
      &:after{
        background: url('../assets/cta-arrow-blue.svg');
      }
    }
    &--navy{
      color: $navy;
      &:after{
        background: url('../assets/cta-arrow-navy.svg');
      }
    }
  }
  &:link, &:active, &:hover, &:visited{
    text-decoration: none;
  }
  &:hover{
    cursor: pointer;
    > .button__span{
      &:after{
        transform: translateX(0.25rem);
      }
    }
  }

}
</style>
