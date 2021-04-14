type Scalars = {
  readonly ID: string;
  readonly Boolean: boolean;
  readonly String: string;
  readonly Int: number;
  readonly Float: number;
  readonly JSON: import('@keystone-next/types').JSONValue;
};

export type UserWhereInput = {
  readonly AND?: ReadonlyArray<UserWhereInput | null> | null;
  readonly OR?: ReadonlyArray<UserWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly name?: Scalars['String'] | null;
  readonly name_not?: Scalars['String'] | null;
  readonly name_contains?: Scalars['String'] | null;
  readonly name_not_contains?: Scalars['String'] | null;
  readonly name_starts_with?: Scalars['String'] | null;
  readonly name_not_starts_with?: Scalars['String'] | null;
  readonly name_ends_with?: Scalars['String'] | null;
  readonly name_not_ends_with?: Scalars['String'] | null;
  readonly name_i?: Scalars['String'] | null;
  readonly name_not_i?: Scalars['String'] | null;
  readonly name_contains_i?: Scalars['String'] | null;
  readonly name_not_contains_i?: Scalars['String'] | null;
  readonly name_starts_with_i?: Scalars['String'] | null;
  readonly name_not_starts_with_i?: Scalars['String'] | null;
  readonly name_ends_with_i?: Scalars['String'] | null;
  readonly name_not_ends_with_i?: Scalars['String'] | null;
  readonly name_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly name_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly firstname?: Scalars['String'] | null;
  readonly firstname_not?: Scalars['String'] | null;
  readonly firstname_contains?: Scalars['String'] | null;
  readonly firstname_not_contains?: Scalars['String'] | null;
  readonly firstname_starts_with?: Scalars['String'] | null;
  readonly firstname_not_starts_with?: Scalars['String'] | null;
  readonly firstname_ends_with?: Scalars['String'] | null;
  readonly firstname_not_ends_with?: Scalars['String'] | null;
  readonly firstname_i?: Scalars['String'] | null;
  readonly firstname_not_i?: Scalars['String'] | null;
  readonly firstname_contains_i?: Scalars['String'] | null;
  readonly firstname_not_contains_i?: Scalars['String'] | null;
  readonly firstname_starts_with_i?: Scalars['String'] | null;
  readonly firstname_not_starts_with_i?: Scalars['String'] | null;
  readonly firstname_ends_with_i?: Scalars['String'] | null;
  readonly firstname_not_ends_with_i?: Scalars['String'] | null;
  readonly firstname_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly firstname_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly email?: Scalars['String'] | null;
  readonly email_not?: Scalars['String'] | null;
  readonly email_contains?: Scalars['String'] | null;
  readonly email_not_contains?: Scalars['String'] | null;
  readonly email_starts_with?: Scalars['String'] | null;
  readonly email_not_starts_with?: Scalars['String'] | null;
  readonly email_ends_with?: Scalars['String'] | null;
  readonly email_not_ends_with?: Scalars['String'] | null;
  readonly email_i?: Scalars['String'] | null;
  readonly email_not_i?: Scalars['String'] | null;
  readonly email_contains_i?: Scalars['String'] | null;
  readonly email_not_contains_i?: Scalars['String'] | null;
  readonly email_starts_with_i?: Scalars['String'] | null;
  readonly email_not_starts_with_i?: Scalars['String'] | null;
  readonly email_ends_with_i?: Scalars['String'] | null;
  readonly email_not_ends_with_i?: Scalars['String'] | null;
  readonly email_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly email_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly password_is_set?: Scalars['Boolean'] | null;
  readonly phone?: Scalars['String'] | null;
  readonly phone_not?: Scalars['String'] | null;
  readonly phone_contains?: Scalars['String'] | null;
  readonly phone_not_contains?: Scalars['String'] | null;
  readonly phone_starts_with?: Scalars['String'] | null;
  readonly phone_not_starts_with?: Scalars['String'] | null;
  readonly phone_ends_with?: Scalars['String'] | null;
  readonly phone_not_ends_with?: Scalars['String'] | null;
  readonly phone_i?: Scalars['String'] | null;
  readonly phone_not_i?: Scalars['String'] | null;
  readonly phone_contains_i?: Scalars['String'] | null;
  readonly phone_not_contains_i?: Scalars['String'] | null;
  readonly phone_starts_with_i?: Scalars['String'] | null;
  readonly phone_not_starts_with_i?: Scalars['String'] | null;
  readonly phone_ends_with_i?: Scalars['String'] | null;
  readonly phone_not_ends_with_i?: Scalars['String'] | null;
  readonly phone_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly phone_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
};

export type UserWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortUsersBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'firstname_ASC'
  | 'firstname_DESC'
  | 'email_ASC'
  | 'email_DESC'
  | 'phone_ASC'
  | 'phone_DESC';

export type UserUpdateInput = {
  readonly name?: Scalars['String'] | null;
  readonly firstname?: Scalars['String'] | null;
  readonly email?: Scalars['String'] | null;
  readonly password?: Scalars['String'] | null;
  readonly phone?: Scalars['String'] | null;
};

export type UsersUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: UserUpdateInput | null;
};

export type UserCreateInput = {
  readonly name?: Scalars['String'] | null;
  readonly firstname?: Scalars['String'] | null;
  readonly email?: Scalars['String'] | null;
  readonly password?: Scalars['String'] | null;
  readonly phone?: Scalars['String'] | null;
};

export type UsersCreateInput = {
  readonly data?: UserCreateInput | null;
};

export type _ksListsMetaInput = {
  readonly key?: Scalars['String'] | null;
  readonly auxiliary?: Scalars['Boolean'] | null;
};

export type _ListSchemaFieldsInput = {
  readonly type?: Scalars['String'] | null;
};

export type PasswordAuthErrorCode =
  | 'FAILURE'
  | 'IDENTITY_NOT_FOUND'
  | 'SECRET_NOT_SET'
  | 'MULTIPLE_IDENTITY_MATCHES'
  | 'SECRET_MISMATCH';

export type CreateInitialUserInput = {
  readonly name?: Scalars['String'] | null;
  readonly email?: Scalars['String'] | null;
  readonly password?: Scalars['String'] | null;
};

export type KeystoneAdminUIFieldMetaCreateViewFieldMode = 'edit' | 'hidden';

export type KeystoneAdminUIFieldMetaListViewFieldMode = 'read' | 'hidden';

export type KeystoneAdminUIFieldMetaItemViewFieldMode =
  | 'edit'
  | 'read'
  | 'hidden';

export type KeystoneAdminUISortDirection = 'ASC' | 'DESC';

export type UserListTypeInfo = {
  key: 'User';
  fields: 'id' | 'name' | 'firstname' | 'email' | 'password' | 'phone';
  backing: {
    readonly id: string;
    readonly name?: string | null;
    readonly firstname?: string | null;
    readonly email?: string | null;
    readonly password?: string | null;
    readonly phone?: string | null;
  };
  inputs: {
    where: UserWhereInput;
    create: UserCreateInput;
    update: UserUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: UserWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortUsersBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type UserListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    UserListTypeInfo,
    UserListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  UserListTypeInfo,
  UserListTypeInfo['fields']
>;

export type KeystoneListsTypeInfo = {
  readonly User: UserListTypeInfo;
};
