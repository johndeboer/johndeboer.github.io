<template>
  <div
    class="w-full text-4xl mt-12 font-bold text-slate-200 flex flex-col items-center"
  >
    <Transition appear
        enter-from-class="opacity-0"
        enter-active-class="duration-700"
        enter-to-class="opacity-100"
    >
        
        <div class="w-1/2 flex justify-start">
          <div class="w-3/4 bg-slate-700 bg-opacity-70 p-8 rounded-lg mb-8">
            <div>Hello &#128075; I'm John de Boer</div>
          </div>
        </div>
    </Transition>


    <Transition appear
        enter-from-class="opacity-0"
        enter-active-class="duration-700 delay-500"
        enter-to-class="opacity-100"
    >
    <div class="w-1/2 flex justify-end">
      <div class="w-3/4 bg-slate-700 bg-opacity-70 p-8 rounded-lg mb-8">
        <div>I'm a software maker from Michigan</div>
      </div>
    </div>
    </Transition>

<Transition appear
        enter-from-class="opacity-0"
        enter-active-class="duration-700 delay-1000"
        enter-to-class="opacity-100"
    >
    <div class="w-1/2 flex justify-start">
      <div class="w-3/4 bg-slate-700 bg-opacity-70 p-8 rounded-lg mb-8">
        <div>I work with Vue.js, Tailwind, and Firebase</div>
      </div>
    </div></Transition>

    <Transition appear
        enter-from-class="opacity-0"
        enter-active-class="duration-700 delay-[1500ms]"
        enter-to-class="opacity-100"
    >
    <div class="w-1/2 flex justify-end">
      <div class="w-3/4 bg-slate-700 bg-opacity-70 p-8 rounded-lg mb-8">
        <div>I love making data-intensive web and mobile applications</div>
      </div>
    </div>
    </Transition>
  </div>
</template>
