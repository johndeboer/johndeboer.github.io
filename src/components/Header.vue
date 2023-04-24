<template>
  <div
    class="w-full text-lg md:text-4xl font-bold text-slate-800 flex flex-col items-center pb-40"
  >

  <div class="w-full flex bg-white text-slate-800 font-normal text-xl py-4 px-8 drop-shadow-lg">
    <p>John</p>
  </div>

  <div class="w-full my-8 px-24 flex flex-col md:flex-row items-center justify-center">
    <img src="../assets/john.jpg" alt="John" class="rounded-full w-3/4 md:w-1/6 mb-4 md:mr-16">
    <div class="mx-12 flex flex-col items-center">
      <p class="">John DeBoer</p>

      <Transition mode="out-in"
        enter-from-class="opacity-0"
        enter-active-class="duration-500 ease-in"
        enter-to-class="opacity-100"
        
        leave-to-class="opacity-0"
        leave-active-class="duration-500 ease-out"
        leave-from-class="opacity-100"
      >
      <p class="mt-2 text-base md:text-xl" v-if="state === 0">is a Developer</p>
      <p class="mt-2 text-base md:text-xl" v-else-if="state === 1">is a Freelancer</p>
      <p class="mt-2 text-base md:text-xl" v-else-if="state === 2">is an Architect</p>
      <p class="mt-2 text-base md:text-xl" v-else-if="state === 3">is a Designer</p>
    </Transition>

    </div>
  </div>
    <!-- <Transition
      appear
      enter-from-class="opacity-0"
      enter-active-class="duration-700"
      enter-to-class="opacity-100"
    >
      <div class="w-11/12 md:w-2/3 flex justify-start">
        <div class="w-5/6 bg-slate-700 bg-opacity-70 p-8 rounded-lg mb-8">
          <div>Hello &#128075; I'm John</div>
        </div>
      </div>
    </Transition>

    <Transition
      appear
      enter-from-class="opacity-0"
      enter-active-class="duration-700 delay-500"
      enter-to-class="opacity-100"
    >
      <div class="w-11/12 md:w-2/3 flex justify-end">
        <div class="w-5/6 bg-slate-700 bg-opacity-70 p-8 rounded-lg mb-8">
          <div>I'm a software maker from Michigan</div>
        </div>
      </div>
    </Transition>

    <Transition
      appear
      enter-from-class="opacity-0"
      enter-active-class="duration-700 delay-1000"
      enter-to-class="opacity-100"
    >
      <div class="w-11/12 md:w-2/3 flex justify-start">
        <div class="w-5/6 bg-slate-700 bg-opacity-70 p-8 rounded-lg mb-8">
          <div>I work with Vue.js, Tailwind, and Firebase</div>
        </div>
      </div></Transition
    >

    <Transition
      appear
      enter-from-class="opacity-0"
      enter-active-class="duration-700 delay-[1500ms]"
      enter-to-class="opacity-100"
    >
      <div class="w-11/12 md:w-2/3 flex justify-end">
        <div class="w-5/6 bg-slate-700 bg-opacity-70 p-8 rounded-lg mb-8">
          <div>I love making data-driven web and mobile applications</div>
        </div>
      </div>
    </Transition> -->
  </div>
</template>

<script>
export default{
  data(){
    return {
      state: 0,
    }
  },
  methods: {
    nextState(){
      this.state += 1;
      if(this.state > 3){this.state = 0;}
    }
  },
  mounted(){
    setInterval(() => {this.nextState();}, 2000);
  }
}
</script>