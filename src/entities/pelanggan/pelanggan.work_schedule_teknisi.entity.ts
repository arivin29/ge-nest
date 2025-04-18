import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'work_schedule_teknisi', schema: 'erp_pelanggan' })
export class PelangganWorkScheduleTeknisi {
  @PrimaryColumn({ name: 'id_work_schedule_teknisi' })
  idWorkScheduleTeknisi: string;

  @Column({ name: 'id_work_schedule' })
  idWorkSchedule: string;

  @Column({ name: 'id_teknisi' })
  idTeknisi: string;

  @Column({ name: 'nama_teknisi' })
  namaTeknisi: string;

  @Column({ name: 'peran', nullable: true })
  peran: string;

  @Column({ name: 'catatan', nullable: true })
  catatan: string;

  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;
}
