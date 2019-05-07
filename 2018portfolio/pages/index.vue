<template>
  <div>
    <div class="home">
      <div class="content">
        <h1 class="content__heading">
          Hello, I'm Owen -<br>A digital problem solver
        </h1>
        <app-button :props="{color: 'blue', text: 'Portfolio', page: 'simpleSpace'}"/>
      </div>
      <div class="shape"></div>
      <svg class="shape__edge shape__edge--desktop" viewBox="0 0 2532 516" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M1265.647.004L2531.282 292.71v222.66H.012L1265.647.004z" fill="#4542f1"/></svg>
      <svg class="shape__edge shape__edge--mobile" viewBox="0 0 809 258" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M404.075 0l404.07 257.5H0L404.075 0z" fill="#4541f2"/></svg>
    </div>
    <app-header background="white" color="#211f39" :overrideColorDesktop="true"/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Button from '@/components/Button.vue';
import Shape from '@/components/Shape.vue';

export default {
  // Setting back to my name in case user clicks back to home from projects page
  created(){
    if(process.browser){
      document.title = 'Owen Rauckman';
      document.head.querySelector('meta[name=description]').content = `Hello, I'm Owen. I design UIs, build web apps, write backend services, and anything in between.`;
    }
  },
  components: {
    'app-header': Header,
    'app-button': Button,
    shape: Shape,
  },
};
</script>
<style scoped lang="scss">
@import "@/assets/global.scss";

body{
  overflow: hidden;
}

/* Animations */
@keyframes slideInShape {
  0% { transform: translateY(25%); }
  100% { transform: translateX(0); }
}

@keyframes slideInText {
  0% { transform: translateX(-25%); opacity: 1; }
  100% { transform: translateX(0); opacity: 1; }
}

/* Styles */
.home{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  max-height: 100%;
  position: fixed;
  top: 0;
  z-index: -1; //works I guess
  width: 100%;
  @include breakpoint(desktop){
    position: relative;
    z-index: +1; //works I guess
  }
}
.content{
  padding: 0 2rem;
  position: relative;
  animation: 0.3s ease 0.75s 1 slideInText forwards;
  opacity: 0;
  @include breakpoint(phone){
    position: absolute;
    left: 10%;
    padding: 4vw;
  }
  &__heading{
    font-family: $cabin;
    font-size: 2rem;
    color: $navy;
    margin-bottom: 3rem;
    letter-spacing: 1px;
    font-weight: 600;
    @include breakpoint(desktop){
      font-size: 3vw;
      margin-bottom: 6vw;
    }
  }
}

.shape{
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 500px;
  background: $blue;
  clip-path: polygon(50% 75%, 0% 100%, 100% 100%);
  animation: 0.5s ease 0s 1 slideInShape;
  z-index: -2 !important;
  // edge hack, ugh
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
    // edge hack, ugh
    z-index: -2 !important;
    @supports (-ms-ime-align: auto) {
      display: block;
      &--mobile{
        z-index: -2 !important;
        display: block;
        @include breakpoint(phone){
          display: none;
        }
      }
      &--desktop{
        z-index: -2 !important;
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
}

// Header overrides (looks better with more padding here)
.header{
  padding: 2rem;
  @include breakpoint(desktop){
    padding: 0;
  }
}
</style>
