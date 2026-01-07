import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'wp_jo', schema: 'erp_amims' })
export class AmimsWpJo {
  @PrimaryColumn({ name: 'id_wp_jo' })
  idWpJo: string;

  @Column({ name: 'id_work_completed', nullable: true })
  idWorkCompleted: string;

  @Column({ name: 'id_unschedule_maintenance', nullable: true })
  idUnscheduleMaintenance: string;

  @Column({ name: 'id_wp', nullable: true })
  idWp: string;

  @Column({ name: 'assigned_to', nullable: true })
  assignedTo: string;

  @Column({ name: 'number_jo', nullable: true })
  numberJo: string;

  @Column({ name: 'type_ofwork', nullable: true })
  typeOfwork: string;

  @Column({ name: 'completion_hours', nullable: true })
  completionHours: number;

  @Column({ name: 'completion_cycle', nullable: true })
  completionCycle: number;

  @Column({ name: 'completion_date', nullable: true })
  completionDate: string;

  @Column({ name: 'cycle_from', nullable: true })
  cycleFrom: number;

  @Column({ name: 'cycle_to', nullable: true })
  cycleTo: number;

  @Column({ name: 'hours_from', nullable: true })
  hoursFrom: number;

  @Column({ name: 'hours_to', nullable: true })
  hoursTo: number;

  @Column({ name: 'time_range_from', nullable: true })
  timeRangeFrom: string;

  @Column({ name: 'time_range_to', nullable: true })
  timeRangeTo: number;

  @Column({ name: 'time_variable', nullable: true })
  timeVariable: string;

  @Column({ name: 'id_aircraft', nullable: true })
  idAircraft: string;

  @Column({ name: 'note_jo', nullable: true })
  noteJo: string;

  @Column({ name: 'id_part', nullable: true })
  idPart: string;

  @Column({ name: 'id_mpart', nullable: true })
  idMpart: string;

  @Column({ name: 'work_due', nullable: true })
  workDue: string;

  @Column({ name: 'id_maintenance', nullable: true })
  idMaintenance: string;

  @Column({ name: 'id_maintenance_code', nullable: true })
  idMaintenanceCode: string;

  @Column({ name: 'status_wp_jo', nullable: true })
  statusWpJo: string;

  @Column({ name: 'id_user', nullable: true })
  idUser: string;

  @Column({ name: 'created_at', nullable: true })
  createdAt: string;

  @Column({ name: 'updated_at', nullable: true })
  updatedAt: string;

  @Column({ name: 'id_site', nullable: true })
  idSite: string;

  @Column({ name: 'id_due_list_output', nullable: true })
  idDueListOutput: string;

  @Column({ name: 'date_jo', nullable: true })
  dateJo: string;

  @Column({ name: 'form_no', nullable: true })
  formNo: string;

  @Column({ name: 'reference', nullable: true })
  reference: string;

  @Column({ name: 'priority', nullable: true })
  priority: string;

  @Column({ name: 'estimated_hours', nullable: true })
  estimatedHours: number;

  @Column({ name: 'actual_hours', nullable: true })
  actualHours: number;

  @Column({ name: 'id_tech_log', nullable: true })
  idTechLog: string;

  @Column({ name: 'inspector_approved_by', nullable: true })
  inspectorApprovedBy: string;

  @Column({ name: 'inspector_approved_at', nullable: true })
  inspectorApprovedAt: string;

  @Column({ name: 'inspector_note', nullable: true })
  inspectorNote: string;

  @Column({ name: 'engineer_approved_by', nullable: true })
  engineerApprovedBy: string;

  @Column({ name: 'engineer_approved_at', nullable: true })
  engineerApprovedAt: string;

  @Column({ name: 'engineer_note', nullable: true })
  engineerNote: string;

  @Column({ name: 'carried_out_date', nullable: true })
  carriedOutDate: string;

  @Column({ name: 'completed_at', nullable: true })
  completedAt: string;

  @Column({ name: 'parent_equipment_type', nullable: true })
  parentEquipmentType: string;

  @Column({ name: 'total_hours_work', nullable: true })
  totalHoursWork: number;

  @Column({ name: 'id_maintenance_program_item', nullable: true })
  idMaintenanceProgramItem: string;
}
