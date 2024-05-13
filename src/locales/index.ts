import i18next from 'i18next'
import En from './en.json'
import Zh from './zh.json'

const resources = {
  cn: {
    translation: Zh
  },
  en: {
    translation: En
  }
}

i18next.init({
  resources, //本地多语言数据
  fallbackLng: 'cn', //默认当前环境的语言
  detection: {
    caches: ['localStorage', 'sessionStorage', 'cookie']
  }
})

export default i18next
