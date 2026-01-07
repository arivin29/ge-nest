import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'work_schedule_bap_item', schema: 'erp_pelanggan' })
export class PelangganWorkScheduleBapItem {
  @PrimaryColumn({ name: 'id_work_schedule_bap_item' })
  idWorkScheduleBapItem: string;

  @Column({ name: 'id_work_schedule_bap' })
  idWorkScheduleBap: string;

  @Column({ name: 'deskripsi_item' })
  deskripsiItem: string;

  @Column({ name: 'qty', nullable: true })
  qty: number;

  @Column({ name: 'satuan', nullable: true })
  satuan: string;

  @Column({ name: 'keterangan', nullable: true })
  keterangan: string;

  @Column({ name: 'custom_field_json', nullable: true })
  customFieldJson: string;

  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;
}
