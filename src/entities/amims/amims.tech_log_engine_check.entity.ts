import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'tech_log_engine_check', schema: 'erp_amims' })
export class AmimsTechLogEngineCheck {
  @PrimaryColumn({ name: 'id_tech_log_engine_check' })
  idTechLogEngineCheck: string;

  @Column({ name: 't5', nullable: true })
  t5: number;

  @Column({ name: 'torque', nullable: true })
  torque: number;

  @Column({ name: 'power_margin', nullable: true })
  powerMargin: number;

  @Column({ name: 'oil_press', nullable: true })
  oilPress: number;

  @Column({ name: 'oil_temp', nullable: true })
  oilTemp: number;

  @Column({ name: 'oat', nullable: true })
  oat: number;

  @Column({ name: 'alt', nullable: true })
  alt: number;

  @Column({ name: 'speed', nullable: true })
  speed: number;

  @Column({ name: 'nr', nullable: true })
  nr: number;

  @Column({ name: 'n1', nullable: true })
  n1: number;

  @Column({ name: 'n2', nullable: true })
  n2: number;

  @Column({ name: 'itt', nullable: true })
  itt: number;

  @Column({ name: 'id_tech_log_engine', nullable: true })
  idTechLogEngine: string;

  @Column({ name: 'id_tech_log', nullable: true })
  idTechLog: string;
}
