import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'part', schema: 'erp_amims' })
export class AmimsPart {
  @PrimaryColumn({ name: 'id_part' })
  idPart: string;

  @Column({ name: 'id_mpart', nullable: true })
  idMpart: string;

  @Column({ name: 'sn', nullable: true })
  sn: string;

  @Column({ name: 'manufacture', nullable: true })
  manufacture: string;

  @Column({ name: 'qty', nullable: true })
  qty: number;

  @Column({ name: 'id_part_condition', nullable: true })
  idPartCondition: string;

  @Column({ name: 'id_condition_monitoring', nullable: true })
  idConditionMonitoring: string;

  @Column({ name: 'id_type_ofwork', nullable: true })
  idTypeOfwork: string;

  @Column({ name: 'id_pur_vendor', nullable: true })
  idPurVendor: string;

  @Column({ name: 'id_warranty', nullable: true })
  idWarranty: string;

  @Column({ name: 'purchase_date', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  purchaseDate: string;

  @Column({ name: 'id_pur_grn', nullable: true })
  idPurGrn: string;

  @Column({ name: 'id_life_time_limit', nullable: true })
  idLifeTimeLimit: string;

  @Column({ name: 'id_pur_prcl', nullable: true })
  idPurPrcl: string;

  @Column({ name: 'end_of_life', nullable: true })
  endOfLife: string;

  @Column({ name: 'id_site', nullable: true })
  idSite: string;

  @Column({ name: 'status_on_inventory', nullable: true })
  statusOnInventory: string;

  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;

  @Column({ name: 'is_deleted', nullable: true })
  isDeleted: number;

  @Column({ name: 'tsn_cycle', nullable: true })
  tsnCycle: number;

  @Column({ name: 'tsn_var', nullable: true })
  tsnVar: string;

  @Column({ name: 'tsn_val', nullable: true })
  tsnVal: number;

  @Column({ name: 'tsn_hours', nullable: true })
  tsnHours: number;

  @Column({ name: 'tso_cycle', nullable: true })
  tsoCycle: number;

  @Column({ name: 'tso_var', nullable: true })
  tsoVar: string;

  @Column({ name: 'tso_val', nullable: true })
  tsoVal: number;

  @Column({ name: 'tso_hours', nullable: true })
  tsoHours: number;

  @Column({ name: 'warranty_start_date', nullable: true })
  warrantyStartDate: string;

  @Column({ name: 'warranty_start_cycle', nullable: true })
  warrantyStartCycle: number;

  @Column({ name: 'warranty_val', nullable: true })
  warrantyVal: number;

  @Column({ name: 'certification_no', nullable: true })
  certificationNo: string;

  @Column({ name: 'warranty_cycle', nullable: true })
  warrantyCycle: number;

  @Column({ name: 'warranty_hours', nullable: true })
  warrantyHours: number;

  @Column({ name: 'warranty_days', nullable: true })
  warrantyDays: number;

  @Column({ name: 'warranty_years', nullable: true })
  warrantyYears: number;

  @Column({ name: 'position', nullable: true })
  position: string;

  @Column({ name: 'tbo_cycle', nullable: true })
  tboCycle: number;

  @Column({ name: 'tbo_var', nullable: true })
  tboVar: string;

  @Column({ name: 'tbo_val', nullable: true })
  tboVal: number;

  @Column({ name: 'tbo_hours', nullable: true })
  tboHours: number;

  @Column({ name: 'life_limit_cycle', nullable: true })
  lifeLimitCycle: number;

  @Column({ name: 'life_limit_var', nullable: true })
  lifeLimitVar: string;

  @Column({ name: 'life_limit_val', nullable: true })
  lifeLimitVal: number;

  @Column({ name: 'life_limit_hours', nullable: true })
  lifeLimitHours: number;

  @Column({ name: 'manufacture_date', nullable: true })
  manufactureDate: string;

  @Column({ name: 'bin', nullable: true })
  bin: string;

  @Column({ name: 'temp_use', nullable: true })
  tempUse: number;

  @Column({ name: 'tsi_cycle', nullable: true })
  tsiCycle: number;

  @Column({ name: 'tsi_var', nullable: true })
  tsiVar: string;

  @Column({ name: 'tsi_val', nullable: true })
  tsiVal: number;

  @Column({ name: 'tsi_hours', nullable: true })
  tsiHours: number;

  @Column({ name: 'old_id', nullable: true })
  oldId: string;

  @Column({ name: 'part_parent', nullable: true })
  partParent: string;

  @Column({ name: 'group_status', nullable: true })
  groupStatus: string;

  @Column({ name: 'tbi_cycle', nullable: true })
  tbiCycle: number;

  @Column({ name: 'tbi_hours', nullable: true })
  tbiHours: number;

  @Column({ name: 'tbi_var', nullable: true })
  tbiVar: string;

  @Column({ name: 'tbi_val', nullable: true })
  tbiVal: number;

  @Column({ name: 'old_parent', nullable: true })
  oldParent: string;

  @Column({ name: 'first_install_c', nullable: true })
  firstInstallC: number;

  @Column({ name: 'first_install_date', nullable: true })
  firstInstallDate: string;

  @Column({ name: 'id_user', nullable: true })
  idUser: string;

  @Column({ name: 'useable_status', nullable: true })
  useableStatus: string;

  @Column({ name: 'start_install_date', nullable: true })
  startInstallDate: string;

  @Column({ name: 'start_install_c', nullable: true })
  startInstallC: number;

  @Column({ name: 'start_install_h', nullable: true })
  startInstallH: number;

  @Column({ name: 'price', nullable: true })
  price: number;

  @Column({ name: 'id_currency', nullable: true })
  idCurrency: string;

  @Column({ name: 'id_pur_po_item', nullable: true })
  idPurPoItem: string;

  @Column({ name: 'date_order', nullable: true })
  dateOrder: string;

  @Column({ name: 'new_first_install_h', nullable: true })
  newFirstInstallH: number;

  @Column({ name: 'first_install_h', nullable: true })
  firstInstallH: number;
}
