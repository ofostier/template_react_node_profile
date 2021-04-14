import { list } from '@keystone-next/keystone/schema';
import { text, password, relationship } from '@keystone-next/fields';

export const User = list({
  // access:
  // ui
  fields: {
    name: text({ isRequired: true }),
    firstname: text({ isRequired: false }),
    email: text({ isRequired: true, isUnique: true }),
    password: password(),
    phone: text({ isRequired: false }),
    // TODO, add roles, cart and orders
  },
});
