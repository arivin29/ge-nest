import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'tech_log_item', schema: 'erp_amims' })
export class AmimsTechLogItem {
  @Column({ name: 'apu_start', nullable: true })
  apuStart: number;

  @Column({ name: 'cg_penalty', nullable: true })
  cgPenalty: string;

  @Column({ name: 'coca_captain', nullable: true })
  cocaCaptain: string;

  @Column({ name: 'cycles', nullable: true })
  cycles: number;

  @Column({ name: 'flight_from', nullable: true })
  flightFrom: string;

  @Column({ name: 'flight_hours', nullable: true })
  flightHours: number;

  @Column({ name: 'flight_to', nullable: true })
  flightTo: string;

  @Column({ name: 'hoist_operation', nullable: true })
  hoistOperation: string;

  @Column({ name: 'hoist_usage', nullable: true })
  hoistUsage: number;

  @Column({ name: 'id_captain', nullable: true })
  idCaptain: string;

  @Column({ name: 'id_tech_log', nullable: true })
  idTechLog: string;

  @PrimaryColumn({ name: 'id_tech_log_item' })
  idTechLogItem: string;

  @Column({ name: 'landing_time', nullable: true })
  landingTime: string;

  @Column({ name: 'landings', nullable: true })
  landings: number;

  @Column({ name: 'note_tech_log_item', nullable: true })
  noteTechLogItem: string;

  @Column({ name: 'sling_released', nullable: true })
  slingReleased: number;

  @Column({ name: 'takeof_time', nullable: true })
  takeofTime: string;
}
