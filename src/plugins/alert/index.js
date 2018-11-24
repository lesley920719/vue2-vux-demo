import { createVM, show, hide } from './util'

let $vm

const plugin = {
  install (Vue) {
    if (!$vm) {
      $vm = createVM(Vue)
    }

    const alert = {
      show (options = {}) {
        return show.call(this, $vm, options)
      },
      hide () {
        return hide.call(this, $vm)
      }
    }
    Vue.$alert = Vue.prototype.$alert = alert
  }
}

export default plugin
export const install = plugin.install
