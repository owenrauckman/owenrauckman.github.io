<template>
  <div @click="$emit('toggleMenu', '')" :class="['menu', menuActive ? 'menu--active': '']">
    <ul class="nav">
      <li class="nav__item">
        <router-link :to="{name: 'simpleSpace'}" class="nav__item__link">Portfolio</router-link>
      </li>
      <li class="nav__item">
        <router-link :to="{name: 'who'}" class="nav__item__link">Who</router-link>
      </li>
      <li class="nav__item">
        <router-link :to="{name: 'hire'}" class="nav__item__link">Hire</router-link>
      </li>
    </ul>
    <a class="nav__email" href="mailto:owenrauckman@gmail.com">
      owenrauckman<span style="font-family: sans-serif">@</span>gmail.com
    </a>
  </div>
</template>

<script>
export default {
  props: ['menuActive'],
};
</script>

<style scoped lang="scss">
@import "@/assets/global.scss";

.menu{
  position: fixed;
  background: $blue;
  z-index: -1;
  height: 40px;
  width: 40px;
  top: 2rem;
  right: 1.5rem;
  opacity: 0;
  transition: all 0.1s ease;
  border-radius: 50%;
  @include breakpoint(desktop){
    top: 5vw;
    right: 5vw;
  }
  &--active{
    top: 0;
    right: 0;
    opacity: 1;
    height: 100vh;
    width: 100vw;
    border-radius: 0%;
    z-index: +1;
    display: flex;
    justify-content: center;
    align-items: center;
    .nav{
      display: flex;
    }
  }
}

// Nav
.nav{
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
  display: none;
  @include breakpoint(desktop){
    flex-direction: row;
  }
  &__item{
    list-style: none;
    font-family: $cabin;
    font-size: 1rem;
    margin: 1.5rem;
    letter-spacing: 1px;
    font-weight: 600;
    text-transform: uppercase;
    @include breakpoint(desktop){
      margin: 4vw;
      font-size: 1.5vw;
      &:first-child{
        margin-left: 0;
      }
    }
    // transition from right
    &__link{
      color: white;
      transform: translateZ(0);
      backface-visibility: hidden;
      position: relative;
      overflow: hidden;
      padding-bottom: 1rem;
      @include breakpoint(desktop){
        padding-bottom: 3vw;
      }
      &:before {
        content: "";
        position: absolute;
        z-index: -1;
        left: 0;
        right: 100%;
        bottom: 0;
        background: white;
        transition-property: right;
        transition-duration: 0.3s;
        transition-timing-function: ease-out;
        height: 5px;
        @include breakpoint(desktop){
          height: 0.5vw;
        }
      }
      &:hover:before {
        right: 0;
      }
      &:link, &:active, &:visited, &:hover{
        text-decoration: none;
      }
    }
  }
  &__email{
    position: absolute;
    bottom: 3rem;
    font-size: 1rem;
    color: rgba(255,255,255,0.75);
    font-family: $cabin;
    &:link, &:active, &:visited, &:hover{
      text-decoration: none;
    }
    &:hover{
      color: white;
    }
    @include breakpoint(desktop){
      font-size: 1.5vw;
    }
  }
}
</style>
