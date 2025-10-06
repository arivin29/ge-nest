import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'engineer_rti', schema: 'erp_amims' })
export class AmimsEngineerRti {
  @Column({ name: 'base', nullable: true })
  base: string;

  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'date_rti', nullable: true })
  dateRti: string;

  @Column({ name: 'dispotition', nullable: true })
  dispotition: number;

  @Column({ name: 'has_pris', nullable: true })
  hasPris: string;

  @Column({ name: 'hash_process', nullable: true })
  hashProcess: string;

  @Column({ name: 'hash_rpd', nullable: true })
  hashRpd: string;

  @Column({ name: 'hash_tech_log', nullable: true })
  hashTechLog: string;

  @Column({ name: 'id_aircraft', nullable: true })
  idAircraft: string;

  @PrimaryColumn({ name: 'id_engineer_rti' })
  idEngineerRti: string;

  @Column({ name: 'id_part', nullable: true })
  idPart: string;

  @Column({ name: 'id_part_install', nullable: true })
  idPartInstall: string;

  @Column({ name: 'id_site', nullable: true })
  idSite: string;

  @Column({ name: 'id_wp_jo', nullable: true })
  idWpJo: string;

  @Column({ name: 'inspected_by', nullable: true })
  inspectedBy: number;

  @Column({ name: 'number_rti', nullable: true })
  numberRti: string;

  @Column({ name: 'reason', nullable: true })
  reason: string;

  @Column({ name: 'received_by', nullable: true })
  receivedBy: number;

  @Column({ name: 'remaining_hours', nullable: true })
  remainingHours: number;

  @Column({ name: 'remark_disposisi', nullable: true })
  remarkDisposisi: string;

  @Column({ name: 'return_by', nullable: true })
  returnBy: number;

  @Column({ name: 'status_rti', nullable: true })
  statusRti: string;

  @Column({ name: 'status_service', nullable: true })
  statusService: string;

  @Column({ name: 'tsn_cycle', nullable: true })
  tsnCycle: number;

  @Column({ name: 'tsn_cycle_parent', nullable: true })
  tsnCycleParent: number;

  @Column({ name: 'tsn_hours', nullable: true })
  tsnHours: number;

  @Column({ name: 'tsn_hours_parent', nullable: true })
  tsnHoursParent: number;

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

  @Column({ name: 'type_rti', nullable: true })
  typeRti: string;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;
}
