import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const messages = {
  en: {
    header: {
      title: 'My Business',
      menu: {
        home: 'Home',
        about: 'About Us',
        mission: 'Mission',
        contacts: 'Contacts'
      }
    },
    date: 'Current date: {date}',
    form: {
      labels: {
        name: 'Name',
        email: 'Email'
      },
      buttons: {
        submit: 'Submit',
        reset: 'Reset'
      }
    }
  },
  ru: {
    header: {
      title: 'Мой бизнес',
      menu: {
        home: 'Главная',
        about: 'О нас',
        mission: 'Миссия',
        contacts: 'Контакты'
      }
    },
    date: 'Текущая дата: {date}',
    form: {
      labels: {
        name: 'Имя',
        email: 'Электронная почта'
      },
      buttons: {
        submit: 'Отправить',
        reset: 'Сбросить'
      }
    }
  }
}

const i18n = new VueI18n({
  locale: 'ru',
  fallbackLocale: 'en',
  messages
})

export default i18n
