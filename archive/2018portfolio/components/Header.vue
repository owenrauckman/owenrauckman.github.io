<template>
  <div class="header" :style="{background:background, transition: '0.2s background ease-out'}">
    <router-link to="/">
      <span class="visually-hidden">Home</span>
      <svg :class="['header__logo', overrideColorDesktop ? 'header__logo--override' : '']" viewBox="0 0 47 47" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="1.5"><path fill="none" d="M0 0h46.6v46.6H0z"/><path class="header__logo__line" d="M5.948 11.71l34.704-9.29L5.948 43.92v-20.36l26.283 20.36" fill="none" :stroke="color" stroke-width="3.5"/></svg>
    </router-link>
    <div @click="toggleMenu" class="header__circle" role="button" aria-label="expand menu"></div>
    <app-menu :menuActive="menuActive" @toggleMenu="toggleMenu"/>
  </div>
</template>

<script>
import Menu from '@/components/Menu.vue';

export default {
  components: {
    'app-menu': Menu,
  },
  props: ['background', 'color', 'overrideColorDesktop'],
  data() {
    return {
      menuActive: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuActive = !this.menuActive;
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/global.scss";

.header{
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  z-index: +1;
  @include breakpoint(desktop){
    padding: 0;
  }
  &__logo{
    min-width: 40px;
    min-height: 40px;
    height: 2vw;
    width: 2vw;
    @include breakpoint(desktop){
      position: fixed;
      height: 3vw;
      width: 3vw;
      left: 5vw;
      top: 5vw;
      &__line{
        transition: 0.2s ease-out;
      }
    }
    &--override{
      @include breakpoint(desktop){
        .header__logo__line{
          stroke: #211f39;
        }
      }
    }
  }
  &__circle{
    height: 1vw;
    width: 1vw;
    top: calc(2rem + 0.5rem);
    right: 2rem;
    min-width: 20px;
    min-height: 20px;
    border-radius: 100%;
    box-shadow: 0px 0px 0px 5px $yellow;
    transition: box-shadow 0.2s ease;
    z-index: +2;
    @include breakpoint(desktop){
      position: fixed;
      right: 5vw;
      top: calc(5vw + 1vw);
      height: 1.5vw;
      width: 1.5vw;
    }
    &:hover{
      cursor: pointer;
      box-shadow: 0px 0px 0px 8px $yellow;
    }
  }
}
</style>
