import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'user_group', schema: 'erp_acl' })
export class AclUserGroup {
  @PrimaryColumn({ name: 'id_user_group' })
  idUserGroup: string;

  @Column({ name: 'nama_user_group' })
  namaUserGroup: string;

  @Column({ name: 'status' })
  status: string;

  @Column({ name: 'deskripsi' })
  deskripsi: string;

  @Column({ name: 'created_at' })
  createdAt: string;
}
