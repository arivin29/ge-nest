import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'work_completed', schema: 'erp_amims' })
export class AmimsWorkCompleted {
  @PrimaryColumn({ name: 'id_work_completed' })
  idWorkCompleted: string;

  @Column({ name: 'work_completed_number' })
  workCompletedNumber: string;

  @Column({ name: 'id_aircraft' })
  idAircraft: string;

  @Column({ name: 'completion_date' })
  completionDate: string;

  @Column({ name: 'location', nullable: true })
  location: string;

  @Column({ name: 'item_type', nullable: true })
  itemType: string;

  @Column({ name: 'ata_code', nullable: true })
  ataCode: string;

  @Column({ name: 'reference', nullable: true })
  reference: string;

  @Column({ name: 'authority', nullable: true })
  authority: string;

  @Column({ name: 'ad_sb_number', nullable: true })
  adSbNumber: string;

  @Column({ name: 'requirement_type', nullable: true })
  requirementType: string;

  @Column({ name: 'disposition', nullable: true })
  disposition: string;

  @Column({ name: 'case_number', nullable: true })
  caseNumber: string;

  @Column({ name: 'compliance_date', nullable: true })
  complianceDate: string;

  @Column({ name: 'compliance_hours', nullable: true })
  complianceHours: number;

  @Column({ name: 'compliance_landings', nullable: true })
  complianceLandings: number;

  @Column({ name: 'next_due_date', nullable: true })
  nextDueDate: string;

  @Column({ name: 'next_due_hours', nullable: true })
  nextDueHours: number;

  @Column({ name: 'next_due_landings', nullable: true })
  nextDueLandings: number;

  @Column({ name: 'interval_months', nullable: true })
  intervalMonths: number;

  @Column({ name: 'interval_days', nullable: true })
  intervalDays: number;

  @Column({ name: 'interval_hours', nullable: true })
  intervalHours: number;

  @Column({ name: 'interval_landings', nullable: true })
  intervalLandings: number;

  @Column({ name: 'work_summary', nullable: true })
  workSummary: string;

  @Column({ name: 'actual_work_hours', nullable: true })
  actualWorkHours: number;

  @Column({ name: 'account_code', nullable: true })
  accountCode: string;

  @Column({ name: 'engineer_sign', nullable: true })
  engineerSign: string;

  @Column({ name: 'inspector_sign', nullable: true })
  inspectorSign: string;

  @Column({ name: 'release_statement', nullable: true })
  releaseStatement: string;

  @Column({ name: 'remarks', nullable: true })
  remarks: string;

  @Column({ name: 'regular_notes', nullable: true })
  regularNotes: string;

  @Column({ name: 'admin_notes', nullable: true })
  adminNotes: string;

  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;

  @Column({ name: 'id_part', nullable: true })
  idPart: string;

  @Column({ name: 'id_wp_jo', nullable: true })
  idWpJo: string;

  @Column({ name: 'engineer_sign_date', nullable: true })
  engineerSignDate: string;

  @Column({ name: 'inspector_sign_date', nullable: true })
  inspectorSignDate: string;

  @Column({ name: 'status', nullable: true })
  status: string;

  @Column({ name: 'is_void', nullable: true })
  isVoid: boolean;

  @Column({ name: 'void_date', nullable: true })
  voidDate: string;

  @Column({ name: 'void_reason', nullable: true })
  voidReason: string;

  @Column({ name: 'voided_by', nullable: true })
  voidedBy: string;
}
