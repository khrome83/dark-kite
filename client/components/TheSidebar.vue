<template>
  <div class="sidebar">
    <div class="logo">
      <slot name=logo />
    </div>
    <div class="navigation">
      <nav class="primary">
        <slot name="primary" />
      </nav>
      <nav class="secondary">
        <slot name="secondary" />
      </nav>
    </div>
  </div>
</template>

<style>
.sidebar {
  background-image: linear-gradient(to right bottom, #3b8070, #398e77, #399c7c, #3caa80, #41b883);
  color: #fff;
  display: flex;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 13rem;
  overflow: hidden;
  flex-direction: column;
}

.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
}

.navigation {
  position: absolute;
  top: 13rem;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-x: hidden;
  overflow-y: scroll;
  padding: 2rem 0;
}
</style>
