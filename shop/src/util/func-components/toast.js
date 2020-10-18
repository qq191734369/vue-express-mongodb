import ToastComponent from '../../components/Toast.vue'
const Toast = {}
Toast.install = function(Vue) {
  Vue.prototype.$zToast = function(message, opt = {}) {
    const {
      time
    } = opt
    const container = document.createElement('div')
    container.classList.add('layer-container')

    const warpper = document.createElement('div')
    container.appendChild(warpper)

    document.body.appendChild(container);

    const ToastFactory = Vue.extend(ToastComponent)
    const instance = new ToastFactory({
      data: null
    })

    instance.$mount(warpper)

    instance.msg = message
    instance.open()

    // const el = instance.$el;
    
    if (time) {
      setTimeout(() => {
        instance.close()
        setTimeout(() => {
          container.parentNode.removeChild(container)
          instance.$destroy(true)
        }, 200)
      }, time)
    }
  }
}

export { Toast }