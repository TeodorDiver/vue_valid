<template>
    <div class="container">
        <div>
            <h1>{{ $t('header.title') }}</h1>
            <p>{{ $t('date', { date: $d(new Date()) }) }}</p>
            <el-row>
                <el-button type="primary" @click="switchLanguage('ru')">Русский</el-button>
                <el-button type="primary" @click="switchLanguage('en')">English</el-button>
            </el-row>
        </div>
        <div class="header-content">
            <el-menu :default-active="activeMenu" mode="horizontal" class="el-menu-demo">
                <el-menu-item >{{ $t('header.menu.home') }}</el-menu-item>
                <el-submenu>
                    <template slot="title">{{ $t('header.menu.about') }}</template>
                    <el-menu-item>{{ $t('header.menu.mission') }}</el-menu-item>
                    <el-menu-item>{{ $t('header.menu.contacts') }}</el-menu-item>
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
    methods: {
        switchLanguage(lang) {
            this.$i18n.locale = lang;
        },
    },
};
</script>

<style scoped>
.container {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
}

.header-content {
    display: flex;
    align-items: center;
}
</style>