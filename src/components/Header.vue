<template>
    <div class="container">
    <div>
        <h1>Мой бизнес</h1>
    </div>
    <div class="header-content">
        <el-menu :default-active="activeMenu" mode="horizontal" class="el-menu-demo">
            <el-menu-item index="1" icon="el-icon-s-home">Главная</el-menu-item>
            <el-submenu index="2" icon="el-icon-s-operation">
                <template slot="title">О нас</template>
                <el-menu-item index="2-1" icon="el-icon-s-check">Миссия</el-menu-item>
                <el-menu-item index="2-2" icon="el-icon-s-order">Контакты</el-menu-item>
            </el-submenu>
        </el-menu>
    </div>
</div>
</template>
<script>
/* eslint-disable */
export default {
    data() {
        return {
            activeMenu: '1',
        };
    },
};
</script>

<style scoped>
.container{
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
}
.header-content {
    display: flex;
    align-items: center;
}
</style>