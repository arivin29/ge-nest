import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'wp_jo', schema: 'erp_amims' })
export class AmimsWpJo {
  @Column({ name: 'carried_out_date', nullable: true })
  carriedOutDate: string;

  @Column({ name: 'completed_at', nullable: true })
  completedAt: string;

  @Column({ name: 'complite_cycle', nullable: true })
  compliteCycle: number;

  @Column({ name: 'complite_date', nullable: true })
  compliteDate: string;

  @Column({ name: 'complite_hours', nullable: true })
  compliteHours: number;

  @Column({ name: 'created_at', nullable: true })
  createdAt: string;

  @Column({ name: 'cycle_from', nullable: true })
  cycleFrom: number;

  @Column({ name: 'cycle_to', nullable: true })
  cycleTo: number;

  @Column({ name: 'date_jo', nullable: true })
  dateJo: string;

  @Column({ name: 'enginer_approved_by', nullable: true })
  enginerApprovedBy: string;

  @Column({ name: 'enginer_approved_date', nullable: true })
  enginerApprovedDate: string;

  @Column({ name: 'enginer_approved_note', nullable: true })
  enginerApprovedNote: number;

  @Column({ name: 'form_no', nullable: true })
  formNo: string;

  @Column({ name: 'hourse_from', nullable: true })
  hourseFrom: number;

  @Column({ name: 'hourse_to', nullable: true })
  hourseTo: number;

  @Column({ name: 'id_aircraft', nullable: true })
  idAircraft: string;

  @Column({ name: 'id_due_list_output', nullable: true })
  idDueListOutput: string;

  @Column({ name: 'id_maintenance', nullable: true })
  idMaintenance: string;

  @Column({ name: 'id_maintenance_code', nullable: true })
  idMaintenanceCode: string;

  @Column({ name: 'id_maintenance_program', nullable: true })
  idMaintenanceProgram: string;

  @Column({ name: 'id_mpart', nullable: true })
  idMpart: string;

  @Column({ name: 'id_part', nullable: true })
  idPart: string;

  @Column({ name: 'id_site', nullable: true })
  idSite: string;

  @Column({ name: 'id_tech_log', nullable: true })
  idTechLog: string;

  @Column({ name: 'id_unschedule_maintenance', nullable: true })
  idUnscheduleMaintenance: string;

  @Column({ name: 'id_user', nullable: true })
  idUser: string;

  @Column({ name: 'id_work_completed', nullable: true })
  idWorkCompleted: string;

  @Column({ name: 'id_wp', nullable: true })
  idWp: string;

  @PrimaryColumn({ name: 'id_wp_jo' })
  idWpJo: string;

  @Column({ name: 'inspector_approved_at', nullable: true })
  inspectorApprovedAt: string;

  @Column({ name: 'inspector_approved_by', nullable: true })
  inspectorApprovedBy: string;

  @Column({ name: 'inspector_approved_note', nullable: true })
  inspectorApprovedNote: string;

  @Column({ name: 'note_jo', nullable: true })
  noteJo: string;

  @Column({ name: 'number_jo', nullable: true })
  numberJo: string;

  @Column({ name: 'parent_equipment_type', nullable: true })
  parentEquipmentType: string;

  @Column({ name: 'priority', nullable: true })
  priority: string;

  @Column({ name: 'reference', nullable: true })
  reference: string;

  @Column({ name: 'status_wp_jo', nullable: true })
  statusWpJo: string;

  @Column({ name: 'time_range_from', nullable: true })
  timeRangeFrom: string;

  @Column({ name: 'time_range_to', nullable: true })
  timeRangeTo: number;

  @Column({ name: 'time_variable', nullable: true })
  timeVariable: string;

  @Column({ name: 'total_hours_work', nullable: true })
  totalHoursWork: number;

  @Column({ name: 'type_ofwork', nullable: true })
  typeOfwork: string;

  @Column({ name: 'updated_at', nullable: true })
  updatedAt: string;

  @Column({ name: 'work_due', nullable: true })
  workDue: string;
}
