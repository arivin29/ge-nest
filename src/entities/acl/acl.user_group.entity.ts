import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'user_group', schema: 'erp_user' })
export class AclUserGroup {
  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'deskripsi', nullable: true })
  deskripsi: string;

  @PrimaryColumn({ name: 'id_user_group' })
  idUserGroup: string;

  @Column({ name: 'nama_user_group' })
  namaUserGroup: string;

  @Column({ name: 'status' })
  status: string;
}
