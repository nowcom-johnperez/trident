import { PRODUCT_NAME, PRODUCT_ROUTE_NAME, BLANK_CLUSTER, CUSTOM_K8S_RESOURCE_NAME, TRIDENT_PAGE_NAME, WIKI_PAGE_NAME, HOME } from './config/constants';

export function init($plugin: any, store: any) {
  const { product, configureType, basicType, virtualType } = $plugin.DSL(store, PRODUCT_NAME);

  product({
    icon:    'application',
    inStore: 'management',
    weight:  100,
    to:      {
      name:      `${PRODUCT_ROUTE_NAME}-c-cluster-${HOME}`,
      params:      {
        product: PRODUCT_NAME,
        cluster: BLANK_CLUSTER,
        pkg:     PRODUCT_NAME
      }
    }
  });

  // defining a k8s resource as page
  // configureType(CUSTOM_K8S_RESOURCE_NAME, {
  //   displayName: 'some-custom-name-you-wish-to-assign-to-this-resource',
  //   isCreatable: true,
  //   isEditable:  true,
  //   isRemovable: true,
  //   showAge:     true,
  //   showState:   true,
  //   canYaml:     true,
  //   customRoute: {
  //     name: `${ PRODUCT_ROUTE_NAME }-c-cluster-resource`,
  //     params: {
  //       product: PRODUCT_NAME,
  //       cluster: BLANK_CLUSTER,
  //       resource: CUSTOM_K8S_RESOURCE_NAME
  //     }
  //   }
  // });

  virtualType({
    label: 'Home',
    name: HOME,
    route: {
      name: `${PRODUCT_ROUTE_NAME}-c-cluster-${HOME}`,
      params: {
        product: PRODUCT_NAME,
        cluster: BLANK_CLUSTER
      }
    }
  });

  virtualType({
    label: 'Home 2',
    name: `${HOME}1`,
    route: {
      name: `${PRODUCT_ROUTE_NAME}-c-cluster-${HOME}1`,
      params: {
        product: PRODUCT_NAME,
        cluster: BLANK_CLUSTER
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
  basicType([CUSTOM_K8S_RESOURCE_NAME, HOME, TRIDENT_PAGE_NAME, WIKI_PAGE_NAME]);
}