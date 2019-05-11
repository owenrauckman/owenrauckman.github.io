<template>
  <div>
    <app-header background="white" color="#211F39"
    :overrideColorDesktop="false"/>
    <div class="who">
      <div class="about">
        <div class="about__item">
          <div class="about__image"></div>
          <h1 class="about__name">
            Owen
            <span class="about__name--last">Rauckman</span>
          </h1>
        </div>
      </div>
      <div class="description">
        <p class="description__paragraph">
          Hey there, my name is Owen. I'm just an average guy from the Midwest who is
          passionate about great design and cutting edge tech. I love to create, build, and
           learn. I started my career as a developer with an eye for design, but my curiousity
           drove me to explore the full stack of software engineering. You can catch me designing UIs,
            building universal javascript apps, writing backend services, or anything in between.
        </p>
      </div>
      <div class="resume">
        <a href="/owenRauckmanResume2019.pdf" target="_blank" class="button">
          <span class="button__span button__span--blue">Resume</span>
        </a>
      </div>
      <div class="blocks">
        <h2 class="blocks__heading">My Building Blocks</h2>
        <div class="blocks__container">

          <a class="block" href="https://nodejs.org">
            <img src="../assets/who/blocks/node.svg"/>
            <p class="block__name">Node</p>
            <p class="block__experience">6+ years</p>
          </a>

          <a class="block" href="https://expressjs.com/">
            <img src="../assets/who/blocks/express.svg"/>
            <p class="block__name">Express</p>
            <p class="block__experience">6+ years</p>
          </a>

          <a class="block" href="https://www.ecma-international.org/ecma-262/6.0/">
            <img src="../assets/who/blocks/javascript.svg"/>
            <p class="block__name">Javascript</p>
            <p class="block__experience">10+ years</p>
          </a>

          <a class="block" href="https://vuejs.org/">
            <img src="../assets/who/blocks/vue.svg"/>
            <p class="block__name">Vue</p>
            <p class="block__experience">4+ years</p>
          </a>

          <a class="block" href="https://reactjs.org/">
            <img src="../assets/who/blocks/react.svg"/>
            <p class="block__name">React / Native</p>
            <p class="block__experience">2+ years</p>
          </a>

          <a class="block" href="http://backbonejs.org/">
            <img src="../assets/who/blocks/backbone.svg"/>
            <p class="block__name">Backbone</p>
            <p class="block__experience">4+ years</p>
          </a>

          <a class="block" href="https://webpack.js.org/">
            <img src="../assets/who/blocks/webpack.svg"/>
            <p class="block__name">Webpack</p>
            <p class="block__experience">2+ years</p>
          </a>

          <a class="block" href="https://www.w3.org/TR/css-2015/">
            <img src="../assets/who/blocks/css.svg"/>
            <p class="block__name">CSS</p>
            <p class="block__experience">13+ years</p>
          </a>

          <a class="block" href="https://sass-lang.com/">
            <img src="../assets/who/blocks/sass.svg"/>
            <p class="block__name">SASS</p>
            <p class="block__experience">6+ years</p>
          </a>

          <a class="block" href="https://www.w3.org/">
            <img src="../assets/who/blocks/html.svg"/>
            <p class="block__name">HTML</p>
            <p class="block__experience">13+ years</p>
          </a>

          <a class="block" href="https://www.contentful.com">
            <img src="../assets/who/blocks/contentful.svg"/>
            <p class="block__name">Contentful</p>
            <p class="block__experience">2+ years</p>
          </a>

          <a class="block" href="https://www.elastic.co/">
            <img src="../assets/who/blocks/elasticsearch.svg"/>
            <p class="block__name">Elasticsearch</p>
            <p class="block__experience">2+ years</p>
          </a>

          <a class="block" href="https://www.mongodb.com/">
            <img src="../assets/who/blocks/mongodb.svg"/>
            <p class="block__name">MongoDB</p>
            <p class="block__experience">4+ years</p>
          </a>

          <a class="block" href="https://www.graphql.org/">
            <img src="../assets/who/blocks/graphql.svg"/>
            <p class="block__name">GraphQL</p>
            <p class="block__experience">2+ years</p>
          </a>

          <a class="block" href="https://www.cloudfoundry.org/">
            <img src="../assets/who/blocks/cloudfoundry.svg"/>
            <p class="block__name">Cloud Foundry</p>
            <p class="block__experience">3+ years</p>
          </a>

          <a class="block" href="https://www.heroku.com/">
            <img src="../assets/who/blocks/heroku.svg"/>
            <p class="block__name">Heroku</p>
            <p class="block__experience">5+ years</p>
          </a>

          <a class="block" href="https://www.do.co/">
            <img src="../assets/who/blocks/digitalocean.svg"/>
            <p class="block__name">Digital Ocean</p>
            <p class="block__experience">3+ years</p>
          </a>

          <a class="block" href="https://serverless.com/framework/">
            <img src="../assets/who/blocks/serverless.svg"/>
            <p class="block__name">Serverless</p>
            <p class="block__experience">2+ years</p>
          </a>

          <a class="block" href="https://jenkins.io/">
            <img src="../assets/who/blocks/jenkins.svg"/>
            <p class="block__name">Jenkins</p>
            <p class="block__experience">3+ years</p>
          </a>

          <a class="block" href="https://git-scm.com/">
            <img src="../assets/who/blocks/git.svg"/>
            <p class="block__name">Git</p>
            <p class="block__experience">6+ years</p>
          </a>

          <a class="block" href="https://sketchapp.com/">
            <img src="../assets/who/blocks/sketch.svg"/>
            <p class="block__name">Sketch</p>
            <p class="block__experience">3+ years</p>
          </a>

          <a class="block" href="https://invisionapp.com/">
            <img src="../assets/who/blocks/invision.svg"/>
            <p class="block__name">Invision</p>
            <p class="block__experience">5+ years</p>
          </a>


        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Button from '@/components/Button.vue';
import config from '@/assets/config';

export default {
  head: {
    title: 'Who',
    meta: [
      { name: 'description', content: `I'm just an average guy from the Midwest who is passionate about great design and cutting edge tech.` }
    ],
  },
  components: {
    'app-header': Header,
    'app-button': Button,
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
.who{
  animation: 0.3s ease 1 slideInPage forwards;
  background: white;
  padding: 4rem 0;
  @include breakpoint(phone){
    // this is the height of the fixed stuff in the header (+10 for extra)
    padding: calc(3vw + 5vw + 5vw) 0 0 0;
  }
}

.about{
  display: flex;
  flex-direction: column;
  padding: 0 5vw 5vw 5vw;
  align-items: flex-end;
  @include breakpoint(phone){
    align-items: center;
    margin-left: 5vw;
  }
  &__item{
    flex: 1 0 0;
    position: relative;
  }
  &__image{
    width: 200px;
    height: 300px;
    position: relative;
    background: url('../assets/who/who-mobile.png') no-repeat;
    background-size: cover;
    background-position: center;
    right: -5rem;
    @include breakpoint(phone){
      right: auto;
      width: 20vw;
      height: 30vw;
      background: url('../assets/who/who-desktop.png') no-repeat;
      background-size: cover;
      background-position: center;
    }
    &:after{
      position: absolute;
      content: '';
      height: 200px;
      width: 200px;
      left: -100px;
      top: 200px;
      background: url('../assets/who/dots.svg') no-repeat;
      z-index: -1;
      @include breakpoint(phone){
        height: 25vw;
        width: 25vw;
        left: 10vw;
        top: 15vw;
      }
    }
    img{
      width: 100%;
      height: auto;
    }
  }
  &__name{
    position: absolute;
    top: 30%;
    transform: translateY(-50%);
    text-transform: uppercase;
    text-align: right;
    color: $blue;
    font-size: 1.5rem;
    left: -25vw;
    z-index: +1;
    @include breakpoint(phone){
      font-size: 3.5vw;
      left: -24vw;
    }
    &:after{
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      content: '';
      background: $yellow;
      height: 4px;
      width: 3rem;
      right: -4rem;
      @include breakpoint(phone){
        height: 0.4vw;
        width: 8vw;
        right: -10vw;
      }
    }
    &--last{
      color: $navy;
      display: block;
    }
  }
}

.description{
  display: flex;
  &__paragraph{
    text-transform: none;
    text-align: left;
    color: transparentize($navy, 0.2);
    font-size: 1rem;
    line-height: 2rem;
    padding: 0 2rem;
    text-align: center;
    margin: 4rem auto;
    @include breakpoint(phone){
      max-width: 45vw;
      padding: 0 5vw;
    }
    @include breakpoint(desktop){
      font-size: 1.5vw;
      line-height: 3vw;
    }
  }
}

.resume{
  display: flex;
  justify-content: center;
}

.blocks{
  margin: 8rem 2rem 4rem 2rem;
  @include breakpoint(desktop){
    margin: 10vw 5vw;
  }
  &__heading{
    font-size: 2rem;
    text-align: center;
    margin: 2rem 0;
    @include breakpoint(desktop){
      font-size: 3vw;
      margin: 0;
    }
  }
  &__container{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    @include breakpoint(desktop){
      padding: 5vw;
    }
  }
}

.block{
  flex: 1 0 calc(50% - 2rem);
  max-width: calc(50% - 2rem);
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
  transform: scale(1);
  transition: transform 0.3s ease;
  &:link, &:visited, &:active, &:hover{
    text-decoration: none;
    color: $navy;
  }
  @include breakpoint(phone){
    flex: 1 0 calc(25% - 2rem);
    max-width: calc(25% - 2rem);
  }
  @include breakpoint(desktop){
    flex: 1 0 calc(20% - 2rem);
    max-width: calc(20% - 2rem);
  }
  img{
    max-width: 80px;
    width: 80px;
  }
  &:hover{
    cursor: pointer;
    transform: scale(1.1);
  }
  &__name{
    margin: 0;
    padding: 0;
    color: $navy;
  }
  &__experience{
    padding: 0;
    margin: 0;
    color: transparentize($navy, 0.5);
    font-size: 0.75rem;
  }
}

//// Button styles from button.vue
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
