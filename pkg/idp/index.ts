import { importTypes } from '@rancher/auto-import';
import { IPlugin, ActionLocation } from '@shell/core/types';
import extensionRouting from './routing/extension-routing';
import './assets/css/custom.css'
import { PRODUCT_NAME, PRODUCT_ROUTE_NAME, WISH_PAGE_NAME } from './config/constants'
// Init the package
export default function(plugin: IPlugin): void {
  // Auto-import model, detail, edit from the folders
  importTypes(plugin);

  // Provide plugin metadata from package.json
  plugin.metadata = require('./package.json');
  // Load a product
  plugin.addProduct(require('./product'));

  plugin.addAction(
    ActionLocation.HEADER,
    { product: [PRODUCT_NAME] },
    {
      tooltip:    'Make a wish',
      shortcut:   'b',
      icon:       'icon-rancher-desktop',
      enabled(ctx: any) {
        return true;
      },
      invoke(opts: any, resources: any) {
        const router = (this as any).$router;
        if (router) {
          router.push({ name: `${ PRODUCT_ROUTE_NAME }-c-cluster-${ WISH_PAGE_NAME }` });
        }
      }
    }
  );

  plugin.addRoutes(extensionRouting);
}
