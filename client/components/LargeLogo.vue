<template>
  <nuxt-link class="logo" :to="to">
    <div class="logo-icon">
      <KiteIcon />
    </div>
    <div class="logo-text">
      <span class="dark">Dark</span>
      <span class="kite">Kite</span>
    </div>
  </nuxt-link>
</template>

<script>
import KiteIcon from '~/static/kite.svg';

export default {
  props: {
    to: String,
  },
  components: {
    KiteIcon,
  },
}
</script>

<style>
.logo {
  text-decoration: none;
  width: 13rem;
  height: 13rem;
  display: flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  flex-direction: column;
  font-size: 1.75rem;
  color: #fff;
}

.logo:hover,
.logo:active {
  background-color: rgba(25, 55, 48, 0.5);
}

.dark {
  font-weight: 700;
}

.kite {
  font-weight: 300;
}
</style>
