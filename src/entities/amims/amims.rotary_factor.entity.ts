import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'rotary_factor', schema: 'erp_amims' })
export class AmimsRotaryFactor {
  @Column({ name: 'adj1', nullable: true })
  adj1: number;

  @Column({ name: 'adj2', nullable: true })
  adj2: number;

  @Column({ name: 'adj3', nullable: true })
  adj3: number;

  @Column({ name: 'date_cycle', nullable: true })
  dateCycle: string;

  @Column({ name: 'date_hours', nullable: true })
  dateHours: string;

  @Column({ name: 'factor1', nullable: true })
  factor1: number;

  @Column({ name: 'factor2', nullable: true })
  factor2: number;

  @Column({ name: 'factor3', nullable: true })
  factor3: number;

  @Column({ name: 'hoist_left', nullable: true })
  hoistLeft: number;

  @Column({ name: 'hoist_right', nullable: true })
  hoistRight: number;

  @Column({ name: 'id_mpart', nullable: true })
  idMpart: string;

  @PrimaryColumn({ name: 'id_rotary_factor' })
  idRotaryFactor: string;

  @Column({ name: 'note_hours', nullable: true })
  noteHours: string;

  @Column({ name: 'note_rotary_factor', nullable: true })
  noteRotaryFactor: string;

  @Column({ name: 'revision_cycle', nullable: true })
  revisionCycle: string;

  @Column({ name: 'revision_hours', nullable: true })
  revisionHours: string;

  @Column({ name: 'rumus_cycle', nullable: true })
  rumusCycle: string;

  @Column({ name: 'rumus_hours', nullable: true })
  rumusHours: string;
}
