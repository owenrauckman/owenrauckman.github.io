<template>
  <div>
    <app-header background="white" color="#211F39"
    :overrideColorDesktop="false"/>
    <div class="hire" v-show="!successState">
      <div class="top">
        <h1 class="heading">Let's Work</h1>
        <p class="description">Tell me about yourself and your project</p>
      </div>

      <form class="form">
        <div class="radio">
          <h2>Need</h2>
          <input type="radio" id="need1" name="need" value="Design" v-model="email.need" >
          <label for="need1">Design</label>

          <input type="radio" id="need2" name="need" value="Development" v-model="email.need" checked>
          <label for="need2">Development</label>

          <input type="radio" id="need3" name="need" value="Other" v-model="email.need" >
          <label for="need3">Other</label>

        </div>
        <div class="radio">
          <h2>Budget</h2>
          <input type="radio" id="budget1" name="budget" value="2-5k" v-model="email.budget" >
          <label for="budget1">2-5K</label>

          <input type="radio" id="budget2" name="budget" value="5-8k" v-model="email.budget" checked>
          <label for="budget2">5-8K</label>

          <input type="radio" id="budget3" name="budget" value="10k+" v-model="email.budget" >
          <label for="budget3">10K+</label>
        </div>

        <div class="info">
          <input type="text" id="name" name="name" placeholder="*Name" v-model="email.name" required>
          <label class="visually-hidden" for="name">Name</label>

          <input type="email" id="email" name="email" placeholder="*Email" v-model="email.email" required>
          <label class="visually-hidden" for="email">Email</label>

          <div class="text-area-container">
            <textarea placeholder="Briefly describe your project..." v-model="email.message"></textarea>
          </div>
        </div>

        <div class="error-container" v-show="errorState">
          <p>Whoops, something went wrong. Please make sure you fill out the name and email address fields and try again.</p>
        </div>

        <div class="button-container">
          <div @click.prevent="sendEmail()">
            <app-button class="button" :props="{color: 'blue', text: 'Send'}"/>
          </div>
        </div>

      </form>
    </div>

    <div class="hire" v-show="successState">
      <div class="top">
        <h1 class="heading">Thank You!</h1>
        <p class="description">Thanks for reaching out. I will be in contact with you shortly!</p>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Button from '@/components/Button.vue';
import config from '@/assets/config';

export default {
  components: {
    'app-header': Header,
    'app-button': Button,
  },
  data() {
    return {
      config,
      errorState:false,
      successState:false,
      email: {
        need: 'Development',
        budget: '5-8k',
        name: '',
        email: '',
        message: '',
      },
    };
  },
  methods: {
    sendEmail(){
      if(!this.email.email.length || this.email.email === null || !this.email.name.length || this.email.name === null){
        this.errorState = true;
      } else{
        // send the email to serverless function
        const url = 'https://qf1yocb7i9.execute-api.us-east-1.amazonaws.com/dev/email/send';
        fetch(url, {
          method: 'POST',
          body: JSON.stringify({
            email: this.email.email,
            name: this.email.name,
            content: JSON.stringify({
              need: this.email.need,
              budget: this.email.budget,
              message: this.email.message,
            })
          }),
          headers:{
            'Content-Type': 'application/json'
          }
        }).then((res )=> res.json())
        .catch((error )=> {
          this.errorState = true;
          this.successState = false;
          console.error('Error:', error)
        })
        .then((response) => {
          this.errorState = false;
          this.successState = true;
          console.log('Success:', response)
        });
      }
    }
  }
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
.hire{
  animation: 0.3s ease 1 slideInPage forwards;
}
.top{
  background: white;
  padding: 0 0 2rem 0;
  @include breakpoint(desktop){
    // this is the height of the fixed stuff in the header (+10 for extra)
    padding: calc(3vw + 5vw + 5vw) 0 0 0;
  }
}

.heading{
  font-size: 2rem;
  text-align: center;
  position: relative;
  max-width: 400px;
  margin: 2rem auto;
  z-index: +1;
  @include breakpoint(desktop){
    font-size: 3vw;
    margin: 0 auto;
  }
  &:before{
    position: absolute;
    content: '';
    height: 200px;
    width: 200px;
    left: -10px;
    top: -20px;
    background: url('../assets/who/dots.svg') no-repeat;
    z-index: -1;
    @include breakpoint(desktop){
      height: 15vw;
      width: 35vw;
      left: -10vw;
      top: -5vw;
    }
  }
}

.description{
  color: $navy;
  text-align: center;
  font-size: 1rem;
  margin-bottom: 2rem;
  position: relative;
  z-index: +1;
  @include breakpoint(desktop){
    margin-bottom: 4vw;
    font-size: 1.5vw;
  }
}

.form{
  max-width: 600px;
  margin: 0rem auto;
  padding: 0 4rem;
  display: flex;
  flex-wrap: wrap;
  @include breakpoint(desktop){
    margin: 12vw auto;
    padding: 0 4vw;
  }
}

.radio{
  flex: 1 0 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  @include breakpoint(desktop){
    flex: 1 0 50%;
    margin-bottom: 0;
  }
  h2{
    font-size: 2rem;
    text-align: center;
    @include breakpoint(desktop){
      font-size: 2.5vw;
    }
  }
  label{
    width: 100%;
    text-align: center;
    position: relative;
    margin: 1.25rem 0;
    font-size: 1.25rem;
    line-height: 0.625rem;
    @include breakpoint(desktop){
      margin: 2vw 0;
      font-size: 2vw;
      line-height: 1vw;
    }
    &:before{
      content: "";
      position: absolute;
      z-index: -1;
      bottom: 0;
      transition: all 0.3s ease;
      height: 5px;
      left: 0;
      right: 0;
      margin: 0 auto;
      @include breakpoint(desktop){
        height: 0.5vw;
      }
    }
    &:hover{
      cursor: pointer;
      &:before {
        width: 100px;
        background: transparentize($yellow, 0.5);
      }
    }
    &:before {
      width: 0;
      background: $yellow;
    }
  }
  input{
    display: none;

    &:checked + label {
      position: relative;
      &:before {
        width: 100px;
        background: $yellow;
      }
    }
  }
}

.info{
  max-width: 400px;
  width: 100%;
  margin: 3rem auto;
  @include breakpoint(desktop){
    margin: 6vw auto 4vw auto;
  }
  input{
    width: 100%;
    background: transparent;
    border: none;
    font-family: $cabin;
    font-size: 1rem;
    border-bottom: solid 1px transparentize(#C5C5C5, 0.5);
    margin-bottom: 3rem;
    font-size: 16px; // ios
    transition: border 0.3s ease;
    -webkit-appearance: none;
    border-radius: 0;
    padding: 2rem 0;
    @include breakpoint(desktop){
      padding: 2vw 0;
      font-size: 1.5vw;
      margin-bottom: 4vw;
    }
    &:focus{
      outline: none;
      border-bottom: solid 3px $yellow;
    }
  }
  textarea{
    min-height: 100px;
    border: solid 1px #C5C5C5;
    padding: 1rem;
    font-size: 16px; // ios
    transition: border 0.3s ease;
    min-height: 100px;
    width: calc(100% - 2rem);
    -webkit-appearance: none;
    border-radius: 0;
    margin-top: 2rem;
    font-family: $cabin;
    @include breakpoint(desktop){
      padding: 2vw;
      font-size: 1vw;
      margin-top: 4vw;
      width: calc(100% - 4vw);
    }
    &:focus{
      outline: none;
      border: solid 1px $yellow;
    }
  }
}

.text-area-container{
  position: relative;
  &:after{
    display: block;
    position: absolute;
    content: '';
    height: 200px;
    width: 200px;
    right: -100px;
    bottom: -150px;
    background: url('../assets/who/dots.svg') no-repeat;
    z-index: -1;
    @include breakpoint(desktop){
      height: 15vw;
      width: 25vw;
      right: -10vw;
      bottom: -5vw;
    }
  }
}

.button{
  &-container{
    display: flex;
    justify-content: flex-end;
    width: 100%;
    margin: 4rem 0;
    padding-right: 2rem;
    @include breakpoint(desktop){
      margin: 6vw 0;
    }
  }
}

.error-container{
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin: 1rem 0;
  padding-right: 2rem;
  background: $blue;
  color: white;
  padding: 2rem;
  @include breakpoint(desktop){
    margin: 2vw 0;
  }
}

</style>
