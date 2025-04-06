import { Column, Entity } from "typeorm";

@Entity("user_group", { schema: "erp_pelanggan" })
export class UserGroup {
  @Column("varchar", { primary: true, name: "id_user_group", length: 36 })
  idUserGroup: string;

  @Column("varchar", { name: "nama_group", length: 100 })
  namaGroup: string;

  @Column("varchar", { name: "status", length: 10, default: () => "'aktif'" })
  status: string;

  @Column("text", { name: "deskripsi", nullable: true })
  deskripsi: string | null;

  @Column("datetime", {
    name: "created_at",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date | null;
}
