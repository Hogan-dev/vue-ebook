const actions = {
  setFileName: ({ commit }, fileName) => {
    return commit('SET_FILENAME', fileName)
  },
  setMenuVisible: ({ commit }, menuVisible) => {
    return commit('SET_MENUVISIBLE', menuVisible)
  },
  setSettingVisible: ({ commit }, settingVisible) => {
    return commit('SET_SETTINGVISIBLE', settingVisible)
  },
  setDefaultFontSize: ({ commit }, defaultSize) => {
    return commit('SET_DEFAULT_FONT_SIZE', defaultSize)
  },
  setCurrentBook: ({ commit }, currentBook) => {
    return commit('SET_CURRENT_BOOK', currentBook)
  }
}
export default actions
