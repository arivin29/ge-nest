import { Column, Entity } from "typeorm";

@Entity("user_group_access", { schema: "erp_pelanggan" })
export class UserGroupAccess {
  @Column("varchar", {
    primary: true,
    name: "id_user_group_access",
    length: 36,
  })
  idUserGroupAccess: string;

  @Column("varchar", { name: "id_user_group", length: 36 })
  idUserGroup: string;

  @Column("varchar", { name: "id_module", length: 36 })
  idModule: string;

  @Column("tinyint", {
    name: "can_list",
    nullable: true,
    width: 1,
    default: () => "'0'",
  })
  canList: boolean | null;

  @Column("tinyint", {
    name: "can_add",
    nullable: true,
    width: 1,
    default: () => "'0'",
  })
  canAdd: boolean | null;

  @Column("tinyint", {
    name: "can_edit",
    nullable: true,
    width: 1,
    default: () => "'0'",
  })
  canEdit: boolean | null;

  @Column("tinyint", {
    name: "can_delete",
    nullable: true,
    width: 1,
    default: () => "'0'",
  })
  canDelete: boolean | null;

  @Column("datetime", {
    name: "created_at",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date | null;
}
