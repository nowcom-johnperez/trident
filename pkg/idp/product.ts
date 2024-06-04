import { PRODUCT_NAME, PRODUCT_ROUTE_NAME, BLANK_CLUSTER, CUSTOM_K8S_RESOURCE_NAME, TRIDENT_PAGE_NAME, WIKI_PAGE_NAME, HOME, DEV_TOOLS_PAGE_NAME } from './config/constants';

export function init($plugin: any, store: any) {
  const { product, configureType, basicType, virtualType, weightType } = $plugin.DSL(store, PRODUCT_NAME);

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
    label: 'Home 1',
    name: HOME+"1",
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
    label: 'Trident Local Testing',
    name:     TRIDENT_PAGE_NAME,
    route:    {
      name:   `${ PRODUCT_ROUTE_NAME }-c-cluster-${ TRIDENT_PAGE_NAME }`,
      params: {
        product: PRODUCT_NAME,
        cluster: BLANK_CLUSTER
      }
    }
  });

  virtualType({
    label: 'Dev Tools',
    name:     DEV_TOOLS_PAGE_NAME,
    route:    {
      name:   `${ PRODUCT_ROUTE_NAME }-c-cluster-${ DEV_TOOLS_PAGE_NAME }`,
      params: {
        product: PRODUCT_NAME,
        cluster: BLANK_CLUSTER
      }
    }
  });

  // creating a custom page
  virtualType({
    label: 'Wiki',
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
  basicType([HOME, HOME+"1", TRIDENT_PAGE_NAME, DEV_TOOLS_PAGE_NAME, WIKI_PAGE_NAME]);
  weightType(HOME, 1001, true)
  weightType(TRIDENT_PAGE_NAME, 998, true)
  weightType(DEV_TOOLS_PAGE_NAME, 999, true)
  weightType(WIKI_PAGE_NAME, 1000, true)
}