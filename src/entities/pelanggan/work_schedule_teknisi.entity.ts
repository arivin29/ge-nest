import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'work_schedule_teknisi', schema: 'erp_pelanggan' })
export class WorkScheduleTeknisi {
  @PrimaryColumn({ name: 'id_schedule_teknisi' })
  idScheduleTeknisi: string;

  @Column({ name: 'id_schedule' })
  idSchedule: string;

  @Column({ name: 'id_teknisi' })
  idTeknisi: string;

  @Column({ name: 'nama_teknisi' })
  namaTeknisi: string;

  @Column({ name: 'peran' })
  peran: string;

  @Column({ name: 'catatan' })
  catatan: string;

  @Column({ name: 'created_at' })
  createdAt: string;
}
