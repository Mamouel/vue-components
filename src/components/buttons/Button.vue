
<template functional>
  <button :disabled="props.disabled" @click="listeners.click" :class="props.class">
    <slot />
  </button>
</template>



