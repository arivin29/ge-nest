import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'user_group_access', schema: 'erp_acl' })
export class UserGroupAccess {
  @PrimaryColumn({ name: 'id_user_group_access' })
  idUserGroupAccess: string;

  @Column({ name: 'id_user_group' })
  idUserGroup: string;

  @Column({ name: 'id_module' })
  idModule: string;

  @Column({ name: 'can_list' })
  canList: boolean;

  @Column({ name: 'can_add' })
  canAdd: boolean;

  @Column({ name: 'can_edit' })
  canEdit: boolean;

  @Column({ name: 'can_delete' })
  canDelete: boolean;

  @Column({ name: 'created_at' })
  createdAt: string;
}
