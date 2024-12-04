<template>
<el-form :model="formData" :rules="rules" ref="formRef" label-width="120px">
    <el-form-item label="Имя" prop="name">
      <el-input v-model="formData.name"></el-input>
    </el-form-item>
    <el-form-item label="Электронная почта" prop="email">
      <el-input v-model="formData.email"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm">Отправить</el-button>
      <el-button @click="resetForm">Сбросить</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {
      formData: {
        name: '',
        email: '',
      },
      rules: {
        name: [
          { required: true, message: 'Пожалуйста, введите ваше имя', trigger: 'blur' },
          { validator: this.validateName, trigger: 'blur' },
        ],
        email: [
          { required: true, message: 'Пожалуйста, введите вашу электронную почту', trigger: 'blur' },
          { type: 'email', message: 'Некорректный адрес электронной почты', trigger: ['blur', 'change'] },
        ],
      },
    };
  },
  methods: {
    submitForm() {
      this.$refs.formRef.validate((valid) => {
        if (valid) {
          localStorage.setItem('formData', JSON.stringify(this.formData));
          if (this.formData.name === 'Сергей' && this.formData.email === 'satarov@mail.com') {
            this.$router.push({ name: 'Greeting', params: { name: this.formData.name } });
          } else {
            alert('Неверное имя или почта!');
          }
        } else {
          console.log('Ошибка отправки формы!');
          return false;
        }
      });
    },
    resetForm() {
      this.$refs.formRef.resetFields();
    },
    validateName(rule, value, callback) {
      if (!value) {
        return callback(new Error('Пожалуйста, введите ваше имя'));
      }
      if (value.length < 3) {
        return callback(new Error('Имя должно содержать не менее 3 символов'));
      }
      callback();
    },
  },
};
</script>
<style>
.el-form {
  width: 500px;
  margin: auto;
}
</style>