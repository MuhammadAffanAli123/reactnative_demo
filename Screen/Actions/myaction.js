import { DemoTypes } from './types';

export const addFriend = DemoList => (
  {
    type: DemoTypes,
    payload: DemoList,
  }
);