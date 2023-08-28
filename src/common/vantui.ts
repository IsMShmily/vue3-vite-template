import { Tabbar, TabbarItem } from 'vant'
import { App } from 'vue'

const Vant = {
  install: (app: App): void => {
    app.use(Tabbar)
    app.use(TabbarItem)
  },
}
export default Vant
