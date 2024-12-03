<template>
  <div id="app">
    <el-container>
      <el-header>
        <h1>Мое Vue Приложение</h1>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'App',
};
</script>