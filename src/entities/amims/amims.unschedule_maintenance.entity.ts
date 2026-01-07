import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'unschedule_maintenance', schema: 'erp_amims' })
export class AmimsUnscheduleMaintenance {
  @PrimaryColumn({ name: 'id_unschedule_maintenance' })
  idUnscheduleMaintenance: string;

  @Column({ name: 'id_aircraft', nullable: true })
  idAircraft: string;

  @Column({ name: 'id_tech_log', nullable: true })
  idTechLog: string;

  @Column({ name: 'airframe_sn', nullable: true })
  airframeSn: string;

  @Column({ name: 'id_part', nullable: true })
  idPart: string;

  @Column({ name: 'ref_number', nullable: true })
  refNumber: string;

  @Column({ name: 'aml_number', nullable: true })
  amlNumber: string;

  @Column({ name: 'status', nullable: true })
  status: string;

  @Column({ name: 'is_optional', nullable: true })
  isOptional: string;

  @Column({ name: 'type', nullable: true })
  type: string;

  @Column({ name: 'ata_code', nullable: true })
  ataCode: string;

  @Column({ name: 'aircraft_grounded', nullable: true })
  aircraftGrounded: string;

  @Column({ name: 'description', nullable: true })
  description: string;

  @Column({ name: 'last_updated_by', nullable: true })
  lastUpdatedBy: string;

  @Column({ name: 'compliance_last_performed_by', nullable: true })
  complianceLastPerformedBy: string;

  @Column({ name: 'reported_date', nullable: true })
  reportedDate: string;

  @Column({ name: 'reported_hours', nullable: true })
  reportedHours: string;

  @Column({ name: 'id_user', nullable: true })
  idUser: string;

  @Column({ name: 'reported_landings', nullable: true })
  reportedLandings: number;

  @Column({ name: 'resolved_date', nullable: true })
  resolvedDate: string;

  @Column({ name: 'resolved_hours', nullable: true })
  resolvedHours: string;

  @Column({ name: 'resolved_landings', nullable: true })
  resolvedLandings: string;

  @Column({ name: 'next_due_param', nullable: true })
  nextDueParam: string;

  @Column({ name: 'next_due_date', nullable: true })
  nextDueDate: string;

  @Column({ name: 'next_due_hours', nullable: true })
  nextDueHours: string;

  @Column({ name: 'next_due_landings', nullable: true })
  nextDueLandings: number;

  @Column({ name: 'delay_status', nullable: true })
  delayStatus: string;

  @Column({ name: 'action_code', nullable: true })
  actionCode: string;

  @Column({ name: 'preliminary_note', nullable: true })
  preliminaryNote: string;

  @Column({ name: 'abort_status', nullable: true })
  abortStatus: string;

  @Column({ name: 'inspection_required', nullable: true })
  inspectionRequired: string;

  @Column({ name: 'hidden_damage_required', nullable: true })
  hiddenDamageRequired: string;

  @Column({ name: 'discovered_by', nullable: true })
  discoveredBy: string;

  @Column({ name: 'discovery_point', nullable: true })
  discoveryPoint: string;

  @Column({ name: 'reference', nullable: true })
  reference: string;

  @Column({ name: 'notes', nullable: true })
  notes: string;

  @Column({ name: 'inspector', nullable: true })
  inspector: string;

  @Column({ name: 'inspection_date', nullable: true })
  inspectionDate: string;

  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;
}
