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
  background-color: #3b8070;
  color: #fff;
  display: flex;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 16rem;
  overflow: hidden;
  flex-direction: column;
}

.logo {
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
}

.navigation {
  position: absolute;
  top: 4rem;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-x: hidden;
  overflow-y: scroll;
  padding-bottom: 3rem;
}
</style>
