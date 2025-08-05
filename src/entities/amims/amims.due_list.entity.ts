import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'due_list', schema: 'erp_amims' })
export class AmimsDueList {
  @Column({ name: 'current_cycle', nullable: true })
  currentCycle: number;

  @Column({ name: 'current_hours', nullable: true })
  currentHours: number;

  @Column({ name: 'cycle_from', nullable: true })
  cycleFrom: number;

  @Column({ name: 'cycle_to', nullable: true })
  cycleTo: number;

  @Column({ name: 'date_due', nullable: true })
  dateDue: string;

  @Column({ name: 'due_ac_cycle', nullable: true })
  dueAcCycle: number;

  @Column({ name: 'due_ac_hours', nullable: true })
  dueAcHours: number;

  @Column({ name: 'due_cycle', nullable: true })
  dueCycle: number;

  @Column({ name: 'due_date', nullable: true })
  dueDate: string;

  @Column({ name: 'due_hours', nullable: true })
  dueHours: number;

  @Column({ name: 'hours_from', nullable: true })
  hoursFrom: number;

  @Column({ name: 'hours_to', nullable: true })
  hoursTo: number;

  @Column({ name: 'id_aircraft', nullable: true })
  idAircraft: string;

  @PrimaryColumn({ name: 'id_due_list' })
  idDueList: string;

  @Column({ name: 'id_mantenance', nullable: true })
  idMantenance: string;

  @Column({ name: 'id_part', nullable: true })
  idPart: string;

  @Column({ name: 'id_type_ofwork', nullable: true })
  idTypeOfwork: string;

  @Column({ name: 'last_cycle', nullable: true })
  lastCycle: number;

  @Column({ name: 'last_date', nullable: true })
  lastDate: string;

  @Column({ name: 'last_hours', nullable: true })
  lastHours: number;

  @Column({ name: 'note_due', nullable: true })
  noteDue: string;

  @Column({ name: 'on_site', nullable: true })
  onSite: number;

  @Column({ name: 'parent_ass', nullable: true })
  parentAss: string;

  @Column({ name: 'parent_cycle', nullable: true })
  parentCycle: number;

  @Column({ name: 'parent_hours', nullable: true })
  parentHours: number;

  @Column({ name: 'parent_time', nullable: true })
  parentTime: number;

  @Column({ name: 'remaining_cycle', nullable: true })
  remainingCycle: number;

  @Column({ name: 'remaining_day', nullable: true })
  remainingDay: string;

  @Column({ name: 'remaining_hours', nullable: true })
  remainingHours: number;

  @Column({ name: 'sn', nullable: true })
  sn: string;

  @Column({ name: 'time_from', nullable: true })
  timeFrom: number;

  @Column({ name: 'time_to', nullable: true })
  timeTo: number;

  @Column({ name: 'time_unit', nullable: true })
  timeUnit: string;

  @Column({ name: 'type_due', nullable: true })
  typeDue: string;

  @Column({ name: 'type_ofwork', nullable: true })
  typeOfwork: string;
}
