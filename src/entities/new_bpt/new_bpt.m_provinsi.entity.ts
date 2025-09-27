import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'm_provinsi', schema: 'new_bpt' })
export class NewBptMProvinsi {
  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @PrimaryColumn({ name: 'id_prov' })
  idProv: string;

  @Column({ name: 'nama_prov' })
  namaProv: string;

  @Column({ name: 'updated_at', nullable: true })
  updatedAt: string;
}
