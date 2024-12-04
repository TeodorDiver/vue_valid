<template>
  <div id="app">
    <el-container>
      <el-header>
        <Header />
      </el-header>
      <el-main class="main-content">
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
/* eslint-disable */
import Header from './components/Header.vue';

export default {
  name: 'App',
  components: {
    Header,
  }
};
</script>

<style>
.main-content {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>