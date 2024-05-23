import { IPlugin } from '@shell/core/types';
import { PRODUCT_NAME, PRODUCT_ROUTE_NAME, BLANK_CLUSTER, CUSTOM_K8S_RESOURCE_NAME, TRIDENT_PAGE_NAME, WIKI_PAGE_NAME } from './config/constants';

export function init($plugin: IPlugin, store: any) {
  const { product, configureType, basicType, virtualType } = $plugin.DSL(store, PRODUCT_NAME);

  product({
    icon:    'gear',
    inStore: 'management',
    weight:  100,
    to:      {
      name:      `${ PRODUCT_ROUTE_NAME }-c-cluster-${ TRIDENT_PAGE_NAME }`,
      // path:      `/${ PRODUCT_ROUTE_NAME }/c/:cluster`,
      params:      {
        product: PRODUCT_NAME,
        cluster: BLANK_CLUSTER,
        pkg:     PRODUCT_NAME
      }
    }
  });

  // defining a k8s resource as page
  configureType(CUSTOM_K8S_RESOURCE_NAME, {
    displayName: 'some-custom-name-you-wish-to-assign-to-this-resource',
    isCreatable: true,
    isEditable:  true,
    isRemovable: true,
    showAge:     true,
    showState:   true,
    canYaml:     true,
    customRoute: {
      name: `${ PRODUCT_ROUTE_NAME }-c-cluster-resource`,
      params: {
        product: PRODUCT_NAME,
        cluster: BLANK_CLUSTER,
        resource: CUSTOM_K8S_RESOURCE_NAME
      }
    }
  });

  // creating a custom page
  virtualType({
    label: 'Trident',
    labelKey: 'Trident',
    displayName: 'Trident',
    name:     TRIDENT_PAGE_NAME,
    route:    {
      name:   `${ PRODUCT_ROUTE_NAME }-c-cluster-${ TRIDENT_PAGE_NAME }`,
      params: {
        product: PRODUCT_NAME,
        cluster: BLANK_CLUSTER
      }
    }
  });

  // creating a custom page
  virtualType({
    labelKey: 'Wiki',
    name:     WIKI_PAGE_NAME,
    route:    {
      name:   `${ PRODUCT_ROUTE_NAME }-c-cluster-${ WIKI_PAGE_NAME }`,
      params: {
        product: PRODUCT_NAME,
        cluster: BLANK_CLUSTER
      }
    }
  });

  // registering the defined pages as side-menu entries
  basicType([CUSTOM_K8S_RESOURCE_NAME, TRIDENT_PAGE_NAME, WIKI_PAGE_NAME]);
}