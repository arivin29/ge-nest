import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'm_pemohon_identitas', schema: 'new_bpt' })
export class NewBptMPemohonIdentitas {
  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @PrimaryColumn({ name: 'id_pemohon_identitas' })
  idPemohonIdentitas: number;

  @Column({ name: 'keterangan' })
  keterangan: string;

  @Column({ name: 'nama' })
  nama: string;

  @Column({ name: 'updated_at', nullable: true })
  updatedAt: string;
}
