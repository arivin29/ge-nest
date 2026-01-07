import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'tech_log_engine', schema: 'erp_amims' })
export class AmimsTechLogEngine {
  @PrimaryColumn({ name: 'id_tech_log_engine' })
  idTechLogEngine: string;

  @Column({ name: 'id_tech_log', nullable: true })
  idTechLog: string;

  @Column({ name: 'id_part', nullable: true })
  idPart: string;

  @Column({ name: 'sn', nullable: true })
  sn: string;

  @Column({ name: 'cycle_bf', nullable: true })
  cycleBf: number;

  @Column({ name: 'hours_bf', nullable: true })
  hoursBf: number;

  @Column({ name: 'cycle_flight', nullable: true })
  cycleFlight: number;

  @Column({ name: 'hours_flight', nullable: true })
  hoursFlight: number;

  @Column({ name: 'oil', nullable: true })
  oil: string;

  @Column({ name: 'oil_add', nullable: true })
  oilAdd: number;

  @Column({ name: 'oil_total', nullable: true })
  oilTotal: number;

  @Column({ name: 'hours_cf', nullable: true })
  hoursCf: number;

  @Column({ name: 'cycle_cf', nullable: true })
  cycleCf: number;

  @Column({ name: 'old_id', nullable: true })
  oldId: string;

  @Column({ name: 'full_cycle_bf', nullable: true })
  fullCycleBf: number;

  @Column({ name: 'full_cycle_flt', nullable: true })
  fullCycleFlt: number;

  @Column({ name: 'part_cycle_bf', nullable: true })
  partCycleBf: number;

  @Column({ name: 'part_cycle_flt', nullable: true })
  partCycleFlt: number;

  @Column({ name: 'time_above_bf', nullable: true })
  timeAboveBf: number;

  @Column({ name: 'time_above_flt', nullable: true })
  timeAboveFlt: number;

  @Column({ name: 'validasi', nullable: true })
  validasi: number;

  @Column({ name: 'n1', nullable: true })
  n1: number;

  @Column({ name: 'n2', nullable: true })
  n2: number;
}
