import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'engineer_rti_identify', schema: 'erp_amims' })
export class AmimsEngineerRtiIdentify {
  @Column({ name: 'date_install', nullable: true })
  dateInstall: string;

  @Column({ name: 'id_engineer_rti', nullable: true })
  idEngineerRti: string;

  @PrimaryColumn({ name: 'id_engineer_rti_identify' })
  idEngineerRtiIdentify: string;

  @Column({ name: 'id_part', nullable: true })
  idPart: string;

  @Column({ name: 'id_part_install', nullable: true })
  idPartInstall: string;

  @Column({ name: 'parent', nullable: true })
  parent: string;

  @Column({ name: 'tsi_cycle', nullable: true })
  tsiCycle: number;

  @Column({ name: 'tsi_hours', nullable: true })
  tsiHours: number;

  @Column({ name: 'tsi_val', nullable: true })
  tsiVal: number;

  @Column({ name: 'tsi_var', nullable: true })
  tsiVar: string;

  @Column({ name: 'tsn_cycle', nullable: true })
  tsnCycle: number;

  @Column({ name: 'tsn_hours', nullable: true })
  tsnHours: number;

  @Column({ name: 'tsn_val', nullable: true })
  tsnVal: number;

  @Column({ name: 'tsn_var', nullable: true })
  tsnVar: string;

  @Column({ name: 'tso_cycle', nullable: true })
  tsoCycle: number;

  @Column({ name: 'tso_hours', nullable: true })
  tsoHours: number;

  @Column({ name: 'tso_val', nullable: true })
  tsoVal: number;

  @Column({ name: 'tso_var', nullable: true })
  tsoVar: string;

  @Column({ name: 'waranty_start_cycle', nullable: true })
  warantyStartCycle: number;

  @Column({ name: 'waranty_start_date', nullable: true })
  warantyStartDate: string;

  @Column({ name: 'waranty_start_days', nullable: true })
  warantyStartDays: number;

  @Column({ name: 'waranty_start_hours', nullable: true })
  warantyStartHours: number;
}
