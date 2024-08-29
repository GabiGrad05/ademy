
export const itemsListMock: {
  id: number;
  name: string;
  description: string;
  isEnable: boolean;
  type: string;
  owner: {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    roles: {};
  };
  image: string;
}[] = [
  {
    id: 1,
    name: 'Java',
    description: 'lorem10',
    isEnable: true,
    type: 'dev',
    owner: {
      id: 1,
      firstName: 'string',
      lastName: 'string',
      email: 'string',
      roles: {},
    },
    image: 'svg',
  },
  {
    id: 2,
    name: 'JavaScript',
    description: 'lorem20',
    isEnable: true,
    type: 'dev',
    owner: {
      id: 1,
      firstName: 'string',
      lastName: 'string',
      email: 'string',
      roles: {},
    },
    image: 'svg',
  },
];

export const itemsStateMock = {
  items: itemsListMock,
  isLoading: false,
};
