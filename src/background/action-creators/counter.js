import { INCREASE } from '../../constants';

export function increase(payload) {
  return {
    type: INCREASE,
    ...payload
  };
}
