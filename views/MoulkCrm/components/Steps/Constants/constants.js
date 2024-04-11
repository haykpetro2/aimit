import { v4 as uuidv4 } from 'uuid';
import { CRM_ITEMS } from '../../../../../data';

export const columnsCrm = {
  [uuidv4()]: {
    name: 'new',
    items: CRM_ITEMS.slice(0, 3),
  },
  [uuidv4()]: {
    name: 'approved',
    items: CRM_ITEMS.slice(3, 6),
  },
  [uuidv4()]: {
    name: 'canceled',
    items: CRM_ITEMS.slice(6, 9),
  },
  [uuidv4()]: {
    name: 'delivery',
    items: CRM_ITEMS.slice(9),
  },
};
