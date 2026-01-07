import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'user_group_access', schema: 'erp_acl' })
export class AclUserGroupAccess {
  @PrimaryColumn({ name: 'id_user_group_access' })
  idUserGroupAccess: string;

  @Column({ name: 'id_user_group' })
  idUserGroup: string;

  @Column({ name: 'id_module' })
  idModule: string;

  @Column({ name: 'can_list', nullable: true })
  canList: boolean;

  @Column({ name: 'can_add', nullable: true })
  canAdd: boolean;

  @Column({ name: 'can_edit', nullable: true })
  canEdit: boolean;

  @Column({ name: 'can_delete', nullable: true })
  canDelete: boolean;

  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;
}
