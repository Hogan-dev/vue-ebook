import { mapActions, mapGetters } from 'vuex'
import { setGlobalTheme, themeList } from './book'

export const ebookMixin = {
  computed: {
    ...mapGetters([
      'fileName',
      'menuVisible',
      'settingVisible',
      'defaultFontSize',
      'currentBook',
      'defaultFontFamily',
      'fontFamilyVisible',
      'defaultTheme',
      'bookAvailable',
      'progress',
      'section'
    ]),
    themeList () {
      return themeList(this)
    }
  },
  methods: {
    ...mapActions([
      'setMenuVisible',
      'setFileName',
      'setSettingVisible',
      'setDefaultFontSize',
      'setCurrentBook',
      'setDefaultFontFamily',
      'setFontFamilyVisible',
      'setDefaultTheme',
      'setBookAvailable',
      'setProgress',
      'setSection'
    ]),
    initGlobalStyle () {
      switch (this.defaultTheme) {
        case 'Default':
          setGlobalTheme(`${process.env.VUE_APP_RES_URL}/theme/theme_default.css`)
          break
        case 'Eye':
          setGlobalTheme(`${process.env.VUE_APP_RES_URL}/theme/theme_eye.css`)
          break
        case 'Gold':
          setGlobalTheme(`${process.env.VUE_APP_RES_URL}/theme/theme_gold.css`)
          break
        case 'Night':
          setGlobalTheme(`${process.env.VUE_APP_RES_URL}/theme/theme_night.css`)
          break
        default:
          setGlobalTheme(`${process.env.VUE_APP_RES_URL}/theme/theme_default.css`)
      }
    }
  }
}
