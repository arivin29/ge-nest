import { AclModule } from './acl.module.entity';
import { AclUserGroup } from './acl.user_group.entity';
import { AclUserGroupAccess } from './acl.user_group_access.entity';
import { AclUserTokens } from './acl.user_tokens.entity';
import { AclUsers } from './acl.users.entity';

export const AclEntities = [
  AclModule,
  AclUserGroup,
  AclUserGroupAccess,
  AclUserTokens,
  AclUsers
];

export * from './acl.module.entity';
export * from './acl.user_group.entity';
export * from './acl.user_group_access.entity';
export * from './acl.user_tokens.entity';
export * from './acl.users.entity';
