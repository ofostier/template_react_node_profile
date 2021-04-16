import { list } from '@keystone-next/keystone/schema';
import { text, password, relationship } from '@keystone-next/fields';
import { sendEmailUserCreated } from '../lib/mailUserCreated';

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
  hooks: {
    resolveInput: async ({resolvedData, existingItem }) => {
      //console.log("Mail to user 1");
      //console.log(existingItem);
      //console.log(resolvedData);

      return resolvedData;
    },
    validateInput: async ({ originalInput,resolvedData, existingItem }) => {
      //console.log(resolvedData);
      if(!existingItem){
        //console.log("Mail to user 2");
        sendEmailUserCreated(resolvedData.email, resolvedData.name);
      }
      
    }
  }
});
