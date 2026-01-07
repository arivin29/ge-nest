import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'log_process', schema: 'erp_amims' })
export class AmimsLogProcess {
  @PrimaryColumn({ name: 'id_log_process' })
  idLogProcess: string;

  @Column({ name: 'sn', nullable: true })
  sn: string;

  @Column({ name: 'id_part', nullable: true })
  idPart: string;

  @Column({ name: 'id_mpart', nullable: true })
  idMpart: string;

  @Column({ name: 'landings', nullable: true })
  landings: number;

  @Column({ name: 'hours', nullable: true })
  hours: number;

  @Column({ name: 'cycle', nullable: true })
  cycle: number;

  @Column({ name: 'rumus_cycle', nullable: true })
  rumusCycle: string;

  @Column({ name: 'calculated_cycle', nullable: true })
  calculatedCycle: string;

  @Column({ name: 'cycle_bf', nullable: true })
  cycleBf: number;

  @Column({ name: 'hours_bf', nullable: true })
  hoursBf: number;

  @Column({ name: 'cycle_flight', nullable: true })
  cycleFlight: number;

  @Column({ name: 'hours_flight', nullable: true })
  hoursFlight: number;

  @Column({ name: 'hours_cf', nullable: true })
  hoursCf: number;

  @Column({ name: 'cycle_cf', nullable: true })
  cycleCf: number;

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

  @Column({ name: 'id_tech_log', nullable: true })
  idTechLog: string;

  @Column({ name: 'id_part_install', nullable: true })
  idPartInstall: string;

  @Column({ name: 'parent', nullable: true })
  parent: string;

  @Column({ name: 'tsn_cycle', nullable: true })
  tsnCycle: number;

  @Column({ name: 'tsn_hours', nullable: true })
  tsnHours: number;

  @Column({ name: 'xcycle_input', nullable: true })
  xcycleInput: number;

  @Column({ name: 'adj1', nullable: true })
  adj1: number;

  @Column({ name: 'adj2', nullable: true })
  adj2: number;

  @Column({ name: 'adj3', nullable: true })
  adj3: number;

  @Column({ name: 'factor1', nullable: true })
  factor1: number;

  @Column({ name: 'factor2', nullable: true })
  factor2: number;

  @Column({ name: 'factor3', nullable: true })
  factor3: number;

  @Column({ name: 'bug_index_log', nullable: true })
  bugIndexLog: number;

  @Column({ name: 'has_for', nullable: true })
  hasFor: string;

  @Column({ name: 'has_update', nullable: true })
  hasUpdate: number;

  @Column({ name: 'hoist_usage', nullable: true })
  hoistUsage: number;

  @Column({ name: 'rumus_hours', nullable: true })
  rumusHours: string;

  @Column({ name: 'calculated_hours', nullable: true })
  calculatedHours: string;

  @Column({ name: 'hoist_operation', nullable: true })
  hoistOperation: string;

  @Column({ name: 'cg_penalti', nullable: true })
  cgPenalti: string;

  @Column({ name: 'hoist_left', nullable: true })
  hoistLeft: number;

  @Column({ name: 'hoist_right', nullable: true })
  hoistRight: number;

  @Column({ name: 'use_hoist_left', nullable: true })
  useHoistLeft: number;

  @Column({ name: 'use_hoist_right', nullable: true })
  useHoistRight: number;

  @Column({ name: 'n1', nullable: true })
  n1: number;

  @Column({ name: 'n2', nullable: true })
  n2: number;
}
