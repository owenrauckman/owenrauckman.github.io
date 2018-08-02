<template>
  <div :class="['highlight', props.index % 2 === 1 ? 'highlight--right' : '']">
    <h2 class="highlight__heading">{{props.config.heading}}</h2>
    <p class="highlight__copy">{{props.config.copy}}</p>
    <img class="highlight__image" :src="require(`@/assets/${props.config.image}`)"
    alt="project screenshot"/>
  </div>
</template>
<script>

export default {
  props: ['props'],
};
</script>
<style scoped lang="scss">
@import "@/assets/global.scss";

.highlight{
  width: 100%;
  margin: 5rem 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  &:first-of-type{
    margin: 2rem 0 5rem 0;
  }
  @include breakpoint(desktop){
    margin: 4vw 0;
    &:first-child{
      margin: 4vw 0;
    }
  }
  &--right{
    align-items: flex-end;
    text-align: right;
  }
  &__heading{
    font-size: 1.25rem;
    letter-spacing: 1px;
    margin-bottom: 1rem;
    @include breakpoint(desktop){
      margin-bottom: 2vw;
      font-size: 1.25vw;
      max-width: 75%;
    }
  }
  &__copy{
    font-size: 1rem;
    line-height: 2rem;
    opacity: 0.7;
    @include breakpoint(desktop){
      font-size: 1.25vw;
      line-height: 2.5vw;
      max-width: 75%;
    }
  }
  &__image{
    margin: 2rem 0;
    @include breakpoint(desktop){
      margin: 4vw 0;
    }
    max-width: 100%;
    height: auto;
    box-shadow: 0px 0px 20px rgba(0,0,0,0.15);
    border-radius: 2px;
  }
}

</style>
