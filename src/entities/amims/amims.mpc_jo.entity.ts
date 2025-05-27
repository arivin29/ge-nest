import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'mpc_jo', schema: 'erp_amims' })
export class AmimsMpcJo {
  @PrimaryColumn({ name: 'id_mpc_jo' })
  idMpcJo: string;

  @Column({ name: 'number_jo', nullable: true })
  numberJo: string;

  @Column({ name: 'complite_cycle', nullable: true })
  compliteCycle: number;

  @Column({ name: 'complite_date', nullable: true })
  compliteDate: string;

  @Column({ name: 'cycle_from', nullable: true })
  cycleFrom: number;

  @Column({ name: 'cycle_to', nullable: true })
  cycleTo: number;

  @Column({ name: 'hourse_from', nullable: true })
  hourseFrom: number;

  @Column({ name: 'hourse_to', nullable: true })
  hourseTo: number;

  @Column({ name: 'time_range_from', nullable: true })
  timeRangeFrom: number;

  @Column({ name: 'time_range_to', nullable: true })
  timeRangeTo: number;

  @Column({ name: 'on_aircraft', nullable: true })
  onAircraft: string;

  @Column({ name: 'roflag', nullable: true })
  roflag: string;

  @Column({ name: 'note_jo', nullable: true })
  noteJo: string;

  @Column({ name: 'id_part', nullable: true })
  idPart: string;

  @Column({ name: 'id_type_ofwork', nullable: true })
  idTypeOfwork: string;

  @Column({ name: 'work_due', nullable: true })
  workDue: string;

  @Column({ name: 'id_maintenance', nullable: true })
  idMaintenance: string;

  @Column({ name: 'original_hours', nullable: true })
  originalHours: number;

  @Column({ name: 'original_cycle', nullable: true })
  originalCycle: number;

  @Column({ name: 'status_jo', nullable: true })
  statusJo: string;

  @Column({ name: 'id_user', nullable: true })
  idUser: string;

  @Column({ name: 'created_at', nullable: true })
  createdAt: string;

  @Column({ name: 'updated_at', nullable: true })
  updatedAt: string;

  @Column({ name: 'on_site', nullable: true })
  onSite: number;

  @Column({ name: 'id_due_list', nullable: true })
  idDueList: string;

  @Column({ name: 'date_jo', nullable: true })
  dateJo: string;

  @Column({ name: 'reference', nullable: true })
  reference: string;

  @Column({ name: 'is_priority', nullable: true })
  isPriority: string;

  @Column({ name: 'original_date', nullable: true })
  originalDate: string;

  @Column({ name: 'action', nullable: true })
  action: string;

  @Column({ name: 'complite_hours', nullable: true })
  compliteHours: number;

  @Column({ name: 'parent_ass', nullable: true })
  parentAss: string;

  @Column({ name: 'id_tech_log', nullable: true })
  idTechLog: string;

  @Column({ name: 'custom_job', nullable: true })
  customJob: string;

  @Column({ name: 'custom_ref', nullable: true })
  customRef: string;

  @Column({ name: 'custom_issued', nullable: true })
  customIssued: string;
}
