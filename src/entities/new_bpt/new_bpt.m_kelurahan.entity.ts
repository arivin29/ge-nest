import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'm_kelurahan', schema: 'new_bpt' })
export class NewBptMKelurahan {
  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'id_kec' })
  idKec: string;

  @PrimaryColumn({ name: 'id_kel' })
  idKel: string;

  @Column({ name: 'jenis' })
  jenis: string;

  @Column({ name: 'nama_kel' })
  namaKel: string;

  @Column({ name: 'updated_at', nullable: true })
  updatedAt: string;
}
