import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'pur_prcl', schema: 'erp_amims' })
export class AmimsPurPrcl {
  @Column({ name: 'airworthiness', nullable: true })
  airworthiness: string;

  @Column({ name: 'certification_no', nullable: true })
  certificationNo: string;

  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'date_pcrl', nullable: true })
  datePcrl: string;

  @Column({ name: 'date_pur', nullable: true })
  datePur: string;

  @Column({ name: 'date_qa', nullable: true })
  dateQa: string;

  @Column({ name: 'description', nullable: true })
  description: string;

  @Column({ name: 'draft_bin', nullable: true })
  draftBin: string;

  @Column({ name: 'id_condition_monitoring', nullable: true })
  idConditionMonitoring: string;

  @Column({ name: 'id_currency', nullable: true })
  idCurrency: string;

  @Column({ name: 'id_internal_grn_item', nullable: true })
  idInternalGrnItem: string;

  @Column({ name: 'id_life_time_limit', nullable: true })
  idLifeTimeLimit: string;

  @Column({ name: 'id_mpart', nullable: true })
  idMpart: string;

  @Column({ name: 'id_part', nullable: true })
  idPart: string;

  @Column({ name: 'id_part_condition', nullable: true })
  idPartCondition: string;

  @Column({ name: 'id_pur_grn', nullable: true })
  idPurGrn: string;

  @Column({ name: 'id_pur_grn_item', nullable: true })
  idPurGrnItem: string;

  @PrimaryColumn({ name: 'id_pur_prcl' })
  idPurPrcl: string;

  @Column({ name: 'id_pur_vendor', nullable: true })
  idPurVendor: string;

  @Column({ name: 'id_user_pu', nullable: true })
  idUserPu: string;

  @Column({ name: 'id_user_qa', nullable: true })
  idUserQa: string;

  @Column({ name: 'is_serviceable', nullable: true })
  isServiceable: number;

  @Column({ name: 'life_limit_cycle', nullable: true })
  lifeLimitCycle: number;

  @Column({ name: 'life_limit_hours', nullable: true })
  lifeLimitHours: number;

  @Column({ name: 'life_limit_val', nullable: true })
  lifeLimitVal: number;

  @Column({ name: 'life_limit_var', nullable: true })
  lifeLimitVar: string;

  @Column({ name: 'loop_index', nullable: true })
  loopIndex: number;

  @Column({ name: 'manufacture', nullable: true })
  manufacture: string;

  @Column({ name: 'manufacture_date', nullable: true })
  manufactureDate: string;

  @Column({ name: 'note_pcrl', nullable: true })
  notePcrl: string;

  @Column({ name: 'part_checking_pur', nullable: true })
  partCheckingPur: string;

  @Column({ name: 'part_checking_qa', nullable: true })
  partCheckingQa: string;

  @Column({ name: 'prcl_parent', nullable: true })
  prclParent: string;

  @Column({ name: 'price', nullable: true })
  price: number;

  @Column({ name: 'qty_check', nullable: true })
  qtyCheck: number;

  @Column({ name: 'qty_prcl', nullable: true })
  qtyPrcl: number;

  @Column({ name: 'qty_return', nullable: true })
  qtyReturn: number;

  @Column({ name: 'quality_check', nullable: true })
  qualityCheck: string;

  @Column({ name: 'ref_date', nullable: true })
  refDate: string;

  @Column({ name: 'ref_id', nullable: true })
  refId: string;

  @Column({ name: 'ref_number', nullable: true })
  refNumber: string;

  @Column({ name: 'service', nullable: true })
  service: string;

  @Column({ name: 'sn', nullable: true })
  sn: string;

  @Column({ name: 'status_prcl', nullable: true })
  statusPrcl: string;

  @Column({ name: 'tbo_cycle', nullable: true })
  tboCycle: number;

  @Column({ name: 'tbo_hours', nullable: true })
  tboHours: number;

  @Column({ name: 'tbo_val', nullable: true })
  tboVal: number;

  @Column({ name: 'tbo_var', nullable: true })
  tboVar: string;

  @Column({ name: 'tsn_cycle', nullable: true })
  tsnCycle: number;

  @Column({ name: 'tsn_hours', nullable: true })
  tsnHours: number;

  @Column({ name: 'tsn_val', nullable: true })
  tsnVal: number;

  @Column({ name: 'tsn_var', nullable: true })
  tsnVar: string;

  @Column({ name: 'tso_cycle', nullable: true })
  tsoCycle: number;

  @Column({ name: 'tso_hours', nullable: true })
  tsoHours: number;

  @Column({ name: 'tso_val', nullable: true })
  tsoVal: number;

  @Column({ name: 'tso_var', nullable: true })
  tsoVar: string;

  @Column({ name: 'type_prcl', nullable: true })
  typePrcl: string;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;

  @Column({ name: 'validasi', nullable: true })
  validasi: number;

  @Column({ name: 'warranty_cycle', nullable: true })
  warrantyCycle: number;

  @Column({ name: 'warranty_days', nullable: true })
  warrantyDays: number;

  @Column({ name: 'warranty_hours', nullable: true })
  warrantyHours: number;

  @Column({ name: 'warranty_months', nullable: true })
  warrantyMonths: number;

  @Column({ name: 'warranty_start_cycle', nullable: true })
  warrantyStartCycle: number;

  @Column({ name: 'warranty_start_date', nullable: true })
  warrantyStartDate: string;
}
