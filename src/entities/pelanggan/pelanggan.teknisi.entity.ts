import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'teknisi', schema: 'erp_pelanggan' })
export class PelangganTeknisi {
  @PrimaryColumn({ name: 'id_teknisi' })
  idTeknisi: string;

  @Column({ name: 'id_pegawai', nullable: true })
  idPegawai: string;

  @Column({ name: 'id_user', nullable: true })
  idUser: string;

  @Column({ name: 'nama_teknisi', nullable: true })
  namaTeknisi: string;

  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'updated_at', nullable: true })
  updatedAt: string;

  @Column({ name: 'status_teknisi', nullable: true })
  statusTeknisi: string;
}
