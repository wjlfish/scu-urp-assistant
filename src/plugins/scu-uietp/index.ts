import Vue from 'vue'
import App from './ScuUietp.vue'

function render(root: HTMLElement) {
  $(root).append(`<div class="sua-container-scu-uietp"></div>`)
  new Vue({
    render: h => h(App)
  }).$mount('.sua-container-scu-uietp')
}

export default {
  name: 'scu-uietp',
  route: 'advanced_query/scu_uietp',
  menu: {
    rootMenuId: 'sua-menu-list',
    rootMenuName: 'SCU URP 助手',
    id: 'menu-advanced-query',
    name: '高级查询',
    item: {
      name: '历届大创查询',
      route: 'advanced_query/scu_uietp',
      breadcrumbs: ['SCU URP 助手', '高级查询', '历届大创查询'],
      render
    }
  }
} as SUAPlugin
