import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 't_izin_bjb', schema: 'new_bpt' })
export class NewBptTIzinBjb {
  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'id_izin', nullable: true })
  idIzin: number;

  @PrimaryColumn({ name: 'id_t_izin_bjb' })
  idTIzinBjb: number;

  @Column({ name: 'ntb', nullable: true })
  ntb: string;

  @Column({ name: 'ntp', nullable: true })
  ntp: string;

  @Column({ name: 'status', nullable: true })
  status: boolean;

  @Column({ name: 'tgl_transaksi', nullable: true })
  tglTransaksi: string;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;
}
