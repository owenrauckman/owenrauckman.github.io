<template>
  <div class="case" :style="`color: ${config.textColor}`">
    <h1 class="project-name" :style="`color: ${config.textColor}`">{{config.formattedName}}</h1>
    <h2 class="project-summary" :style="`color: ${config.textColor}`">
      {{config.summary}}
    </h2>
    <a class="project-cta" :href="config.projectLink">
      <span class="visually-hidden">View Project</span>
      <svg viewBox="0 0 43 43" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="1.5"><path d="M14.695 27.414l12.718-12.718v9.216-9.216h-9.216" fill="none" :stroke="`${config.textColor}`" stroke-width="2.1378592"/><circle cx="2628.3" cy="960.007" r="33.518" fill="none" :stroke="`${config.textColor}`" stroke-width="2" transform="matrix(.60997 0 0 .60997 -1582.13 -564.522)"/></svg>
    </a>
    <highlight v-for="(item, index) in config.highlights" :key="index"
    :props="{index, config: item}"/>
    <div class="stack">
      <h2 class="stack__heading">> The Stack</h2>
      <ul class="stack__list">
        <li v-for="item in config.stack" :key="item" class="stack__list__item">{{item}}</li>
      </ul>
      <a class="stack-cta" :href="config.sourceLink">
        <span class="visually-hidden">View Source</span>
        <svg viewBox="0 0 43 43" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="1.5"><path d="M14.695 27.414l12.718-12.718v9.216-9.216h-9.216" fill="none" :stroke="`${config.textColor}`" stroke-width="2.1378592"/><circle cx="2628.3" cy="960.007" r="33.518" fill="none" :stroke="`${config.textColor}`" stroke-width="2" transform="matrix(.60997 0 0 .60997 -1582.13 -564.522)"/></svg>
      </a>
    </div>
  </div>
</template>
<script>
import Highlight from '@/components/Highlight.vue';

export default {
  components: {
    highlight: Highlight,
  },
  props: ['config'],
};
</script>
<style scoped lang="scss">
@import "@/assets/global.scss";

.project{
  &-name{
    opacity: 0.7;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 1rem;
    margin: 2rem 0;
    @include breakpoint(desktop){
      font-size: 1.25vw;
      margin: 0 0 1vw 0;
    }
  }
  &-summary{
    max-width: 80%;
    margin: 0;
    font-size: 2rem;
    line-height: 3rem;
    @include breakpoint(desktop){
      margin: 0 0 1vw 0;
      font-size: 3vw;
      line-height: 4vw;
    }
  }
  &-cta{
    position: relative;
    margin: 2rem 0 0 0;
    display: inline-block;
    transition: transform 0.2s ease;
    transform: scale(1);
    @include breakpoint(desktop){
      margin: auto;
      position: absolute;
      top: 5vw;
      right: 5vw;
    }
    svg{
      height: 2rem;
      width: 2rem;
      @include breakpoint(desktop){
        height: 3vw;
        width: 3vw;
      }
    }
    &:hover{
      transform: scale(1.2);
    }
  }
}

.stack{
  background: $navy;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 2rem 2rem 4rem 2rem;
  box-shadow: 0px 0px 20px rgba(0,0,0,0.15);
  border-radius: 2px;
  margin: 3rem 0;
  @include breakpoint(desktop){
    padding: 2vw 3vw 4vw 3vw;
  }
  &__heading{
    color: white;
    letter-spacing: 1px;
    font-size: 1.5rem;
    line-height: 2rem;
    margin: 1rem 0;
    @include breakpoint(desktop){
      margin: 2vw 0;
      font-size: 3vw;
    }
  }
  &__list{
    padding: 0;
    margin: 0;
    max-width: 80%;
    &__item{
      list-style: none;
      margin: 1rem 2rem;
      @include breakpoint(desktop){
        font-size: 1.25vw;
      }
    }
  }
  &-cta{
    margin: auto;
    position: absolute;
    bottom: 2rem;
    right: 2rem;
    transition: transform 0.2s ease;
    transform: scale(1);
    svg{
      height: 2rem;
      width: 2rem;
      @include breakpoint(desktop){
        height: 3vw;
        width: 3vw;
      }
    }
    &:hover{
      transform: scale(1.2);
    }
  }
}

</style>
