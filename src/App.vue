<template>
  <div id="app" />
</template>

<script>

export default {
  name: 'App'

}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;

  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

}
img {
  width: 400px;
}
.a {
  width: 508px;
  height: 400px;
  transition-delay: 1s;
  border: 1px solid #ccc;
  &::after {
    content: 'sss';
    display: inline-block;
    width: 50px;
  }
}
.b {
  width: 187px;
  height: 200px;
}
</style>
