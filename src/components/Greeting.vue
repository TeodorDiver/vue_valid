<template>
    <div>
        <h1>Привет, {{ name }}!</h1>
        <p>Добро пожаловать на нашу страницу.</p>
    </div>
</template>
<script>
/* eslint-disable */
export default {
    props: {
        name: {
            type: String,
            required: true,
        },
    },
};
</script>