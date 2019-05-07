<template>
  <div class="projects">
    <app-header :background="config[$route.name].primary" color="white"
    :overrideColorDesktop="true"/>

    <!-- content -->
    <div class="content-transition">
      <div class="content">
        <div :class="['content__menu', showProjects ? 'content__menu--active' : '']"
          :style="{background:config[$route.name].primary}">
          <div @click="showProjects = !showProjects">
            <div class="content__select">All Projects</div>
          </div>
          <ul class="content__list">
            <li v-for="(project, index) in config" :key="index"
            :class="['content__list__item',
            project.name === $route.name ? 'content__list__item--active' : '']">
              <router-link class="content__list__link" :to="{name: project.name}"
                @click.native="showProjects = !showProjects">
                {{project.formattedName}}
              </router-link>
            </li>
          </ul>
        </div>
        <transition name="fade" mode="out-in">
          <router-view :key="$route.name" :config="config[$route.name]"></router-view>
        </transition>
      </div>
    </div>
    <shape :color="config[$route.name].primary" isTransparent="true"/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Case from '@/components/Case.vue';
import Shape from '@/components/Shape.vue';
import config from '@/assets/config';

export default {
  components: {
    'app-header': Header,
    case: Case,
    shape: Shape,
  },
  data() {
    return {
      showProjects: false,
      config,
    };
  },
};
</script>
<style scoped lang="scss">
@import "@/assets/global.scss";

/*
  Transitions
*/
.fade-enter-active, .fade-leave-active {
  transition: all .1s ease-out;
  @include breakpoint(desktop){
    transition: transform .2s ease-out;
  }
}

.fade-enter{
  transform: translateY(-2%);
  @include breakpoint(desktop){
    transform: translateY(5%);
  }
}

.fade-leave-to{
  transform: translateY(-2%);
  @include breakpoint(desktop){
    transform: translateY(5%);
  }
}

/*
  Animations
*/
@keyframes slideInPage {
  0% {
    transform: scale(0.75);
  }
  100% {
    transform: scale(1);
  }
}

/*
  Styles
*/
body{
  overflow-x: hidden;
}
// this was a solution because nested scales weren't working well on desktop
.content-transition{
  animation: 0.3s ease 1 slideInPage forwards;
  @include breakpoint(desktop){
    height: auto;
    width: 100%;
    height: 100vh;
  }
}
.content{
  margin: 0;
  display: flex;
  flex-direction: column;
  position: relative;
  @include breakpoint(desktop){
    position: absolute;
    flex-direction: row;
    margin: 0vw 15vw;
    top: 0;
    height: 100vh;
    width: calc(100% - 30vw);
    overflow-y: scroll;
  }
  &__menu{
    height: fit-content;
    flex: 1 0 calc(25% - 10vw);
    padding: 1rem 2rem 0 0;
    display: flex;
    justify-content: flex-end;
    text-align: right;
    @include breakpoint(desktop){
      color: $navy;
      background: transparent !important; //override config colors
      padding: 5vw 10vw 5vw 0;
    }
    .content__list{
      display: block;
      opacity: 0;
      transform: scale(0.5);
      transform-origin: 100% 0;
      transition: all 0.2s ease;
      background: white;
      @include breakpoint(desktop){
        background: transparent;
        opacity: 1;
        transform: scale(1);
      }
    }
    &--active{
      flex-direction: column;
      @include breakpoint(desktop){
        flex-direction: row;
      }
      .content__list{
        display: block;
        opacity: 1;
        transform: scale(1);
        z-index: +1;
      }
      .content__select{
        align-self: flex-end;
        &:after{
          transform: rotate(90deg);
        }
      }
    }
  }
  &__select{
    letter-spacing: 2px;
    font-size: 0.9rem;
    font-weight: 600;
    position: relative;
    left: -1rem;
    color: white;
    padding: 1rem;
    @include breakpoint(desktop){
      display: none;
    }
    &:hover{
      cursor: pointer;
    }
    &:after{
      position: absolute;
      pointer-events: none;
      content: '';
      height: 2px;
      width: 10px;
      right: -18px;
      top: 50%;
      transform: translateY(-50%);
      background: white;
      transition: transform ease 0.2s;
    }
  }
  &__list{
    margin: 0;
    padding: 0;
    height: auto;
    letter-spacing: 1px;
    font-size: 0.9rem;
    display: none;
    color: white;
    margin: 4rem 0 0 0;
    position: absolute;
    top: 0;
    right: 1rem;
    background: white;
    padding: 2rem 0 1rem 4rem;
    color: $navy;
    box-shadow: 0 0 5px rgba(0,0,0,.15);
    border-radius: 2px;
    @include breakpoint(desktop){
      height: fit-content;
      right: auto;
      text-align: left;
      border-radius: 0;
      box-shadow: none;
      padding: 6vw 0 0 0;
      position: fixed;
      display: block;
      font-size: 1.25vw;
    }
    &__item{
      list-style: none;
      margin: 1.25rem;
      position: relative;
      @include breakpoint(desktop){
        margin: 2.25vw 0;
      }
      &:first-child{
        margin-top: 0;
      }
      &:before{
        content: '';
        position: absolute;
        height: 4px;
        width: 4px;
        border-radius: 4px;
        left: -2rem;
        top: 50%;
        transform: translateY(-50%) scale(2);
        transition: all 0.2s ease;
        background: transparent;
        @include breakpoint(desktop){
          left: -2vw;
        }
      }
      &--active{
        &:before{
          transform: translateY(-50%) scale(1);
          background: $navy;
        }
      }
    }
    &__link{
      color: $navy;
      text-decoration: none;
      &:active, &:visited, &:hover{
        color: $navy;
        text-decoration: none;
      }
    }
  }
}

</style>
