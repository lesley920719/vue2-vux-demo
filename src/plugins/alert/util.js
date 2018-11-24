import AlertComponent from '@/components/layout/CommonAlert'

export function createVM (Vue) {
  const Alert = Vue.extend(AlertComponent)
  const $vm = new Alert({
    el: document.createElement('div')
  })
  document.body.appendChild($vm.$el)
  return $vm
}

export function show ($vm, options) {
  if (typeof options === 'object') {
    $vm.content = options
  }

  this.watcher && this.watcher()
  this.watcher = $vm.$watch('showValue', (val) => {
    this.watcher && this.watcher()
  })
  $vm.showValue = true
}

export function hide ($vm) {
  $vm.showValue = false
  $vm.$nextTick(() => {
    this.watcher && this.watcher()
    this.watcher = null
  })
}

export default {
  show,
  hide
}
