import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'log_sp', schema: 'erp_amims' })
export class AmimsLogSp {
  @PrimaryColumn({ name: 'id_log_sp' })
  idLogSp: string;

  @Column({ name: 'id', nullable: true })
  id: string;

  @Column({ name: 'name', nullable: true })
  name: string;

  @Column({ name: 'sp', nullable: true })
  sp: string;

  @Column({ name: 'param1', nullable: true })
  param1: string;

  @Column({ name: 'param2', nullable: true })
  param2: string;

  @Column({ name: 'desk', nullable: true })
  desk: string;

  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'has_id', nullable: true })
  hasId: string;

  @Column({ name: 'status', nullable: true })
  status: string;

  @Column({ name: 'date_close', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  dateClose: string;
}
