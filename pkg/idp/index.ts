import { importTypes } from '@rancher/auto-import';
import { IPlugin } from '@shell/core/types';
import extensionRouting from './routing/extension-routing';
import './assets/css/custom.css'

import Vue from 'vue'
import {
  // Directives
  vTooltip,
  vClosePopper,
  // Components
  Dropdown,
  Tooltip,
  Menu
} from 'floating-vue'

Vue.directive('tooltip', vTooltip)
Vue.directive('close-popper', vClosePopper)

Vue.component('VDropdown', Dropdown)
Vue.component('VTooltip', Tooltip)
Vue.component('VMenu', Menu)
import 'floating-vue/dist/style.css'
// Init the package
export default function(plugin: IPlugin): void {
  // Auto-import model, detail, edit from the folders
  importTypes(plugin);

  // Provide plugin metadata from package.json
  plugin.metadata = require('./package.json');

  // Load a product
  plugin.addProduct(require('./product'));
  plugin.addRoutes(extensionRouting);
}
