<template>
  <div
    class="w-full text-lg md:text-4xl mt-12 font-bold text-slate-200 flex flex-col items-center"
  >
  <div class="w-1/2 md:w-1/4 mb-8">
    <img src="../../assets/john.jpg" alt="John" class="rounded-full">
  </div>
    <Transition
      appear
      enter-from-class="opacity-0"
      enter-active-class="duration-700"
      enter-to-class="opacity-100"
    >
      <div class="w-11/12 md:w-1/2 flex justify-start">
        <div class="w-5/6 bg-slate-700 bg-opacity-70 p-8 rounded-lg mb-8">
          <div>Hello &#128075; I'm John de Boer</div>
        </div>
      </div>
    </Transition>

    <Transition
      appear
      enter-from-class="opacity-0"
      enter-active-class="duration-700 delay-500"
      enter-to-class="opacity-100"
    >
      <div class="w-11/12 md:w-1/2 flex justify-end">
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
      <div class="w-11/12 md:w-1/2 flex justify-start">
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
      <div class="w-11/12 md:w-1/2 flex justify-end">
        <div class="w-5/6 bg-slate-700 bg-opacity-70 p-8 rounded-lg mb-8">
          <div>I love making data-driven web and mobile applications</div>
        </div>
      </div>
    </Transition>
  </div>
</template>
