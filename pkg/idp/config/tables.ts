interface HeaderType {
  title: string;
  value: string;
  main: boolean;
  sortable: boolean;
  sort?: string;
};

interface SortableHeaderType {
  name: string;
  label: string;
  sort: string|string[];
  search: string|string[];
  width: number;
  formatter?: string;
}

const TRIDENT_TABLE_HEADERS: SortableHeaderType[] = [
  {
      name: 'title',
      label: 'Title',
      sort: ['title'],
      search: ['title'],
      width: 10,
  },
  {
      name: 'description',
      label: 'Description',
      sort: ['description'],
      search: ['description'],
      width: 10
  },
  {
      name: 'ip',
      label: 'IP',
      sort: ['ip'],
      search: ['ip'],
      width: 10
  },
  {
    name: 'healthCheck',
    label: 'Health Check',
    sort: ['healthCheck'],
    search: ['healthCheck'],
    width: 10
  },
  {
    name: 'repoBranch',
    label: 'Repo Branch',
    sort: ['repoBranch'],
    search: ['repoBranch'],
    width: 10
  },
  {
    name: 'rancher',
    label: 'Rancher',
    sort: ['rancher'],
    search: ['rancher'],
    width: 10
  },
];

const SORTABLE_SUB_NETWORK_HEADERS: SortableHeaderType[] = [
  {
      name: 'longName',
      label: 'Subnet Name',
      sort: ['longName'],
      search: ['longName'],
      width: 50,
  },
  {
      name: 'formattedAddress',
      label: 'Network Address',
      sort: ['formattedAddress'],
      search: ['formattedAddress'],
      width: 30
  },
  {
      name: 'translatedAddress',
      label: 'Translated Address',
      sort: ['translatedAddress'],
      search: ['translatedAddress'],
      width: 30
  },
  // {
  //     name: 'prefix_len',
  //     label: 'Network Prefix',
  //     sort: ['prefix_len'],
  //     search: ['prefix_len'],
  //     width: 10
  // }
];


export { TRIDENT_TABLE_HEADERS, SORTABLE_SUB_NETWORK_HEADERS }