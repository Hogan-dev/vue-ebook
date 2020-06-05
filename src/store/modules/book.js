const book = {
  state: {
    fileName: '',
    menuVisible: false,
    settingVisible: -1, // -1:不显示，0:字号,1:主题,2:进度,3:目录
    defaultFontSize: 16,
    currentBook: null
  },
  mutations: {
    SET_FILENAME: (state, fileName) => {
      state.fileName = fileName
    },
    SET_MENUVISIBLE: (state, menuVisible) => {
      state.menuVisible = menuVisible
    },
    SET_SETTINGVISIBLE: (state, settingVisible) => {
      state.settingVisible = settingVisible
    },
    SET_DEFAULT_FONT_SIZE: (state, defaultFontSize) => {
      state.defaultFontSize = defaultFontSize
    },
    SET_CURRENT_BOOK: (state, currentBook) => {
      state.currentBook = currentBook
    }
  },
  actions: {

  }
}

export default book
