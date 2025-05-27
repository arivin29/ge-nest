import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'mpart', schema: 'erp_amims' })
export class AmimsMpart {
  @PrimaryColumn({ name: 'id_mpart' })
  idMpart: string;

  @Column({ name: 'parent', nullable: true })
  parent: string;

  @Column({ name: 'partname', nullable: true })
  partname: string;

  @Column({ name: 'childname', nullable: true })
  childname: string;

  @Column({ name: 'id_ata', nullable: true })
  idAta: string;

  @Column({ name: 'id_partid', nullable: true })
  idPartid: string;

  @Column({ name: 'part_number', nullable: true })
  partNumber: string;

  @Column({ name: 'keyword', nullable: true })
  keyword: string;

  @Column({ name: 'description_mpart', nullable: true })
  descriptionMpart: string;

  @Column({ name: 'id_group', nullable: true })
  idGroup: string;

  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;

  @Column({ name: 'status_mpart', nullable: true })
  statusMpart: string;

  @Column({ name: 'id_part_category', nullable: true })
  idPartCategory: string;

  @Column({ name: 'is_deleted', nullable: true })
  isDeleted: number;

  @Column({ name: 'unit', nullable: true })
  unit: string;

  @Column({ name: 'ismayor', nullable: true })
  ismayor: string;

  @Column({ name: 'mfigure_index', nullable: true })
  mfigureIndex: string;

  @Column({ name: 'mitem_index', nullable: true })
  mitemIndex: string;

  @Column({ name: 'id_life_time_limit', nullable: true })
  idLifeTimeLimit: string;

  @Column({ name: 'life_limit_cycle', nullable: true })
  lifeLimitCycle: number;

  @Column({ name: 'life_limit_hours', nullable: true })
  lifeLimitHours: number;

  @Column({ name: 'life_limit_var', nullable: true })
  lifeLimitVar: string;

  @Column({ name: 'life_limit_val', nullable: true })
  lifeLimitVal: number;

  @Column({ name: 'old_id', nullable: true })
  oldId: string;

  @Column({ name: 'mat_82', nullable: true })
  mat_82: string;

  @Column({ name: 'manufacture_mpart', nullable: true })
  manufactureMpart: string;

  @Column({ name: 'calculated_cycle', nullable: true })
  calculatedCycle: string;

  @Column({ name: 'calculated_hours', nullable: true })
  calculatedHours: string;

  @Column({ name: 'ref_mel', nullable: true })
  refMel: string;

  @Column({ name: 'is_mandatory', nullable: true })
  isMandatory: string;

  @Column({ name: 'min_qty', nullable: true })
  minQty: number;

  @Column({ name: 'old_atachapter', nullable: true })
  oldAtachapter: string;

  @Column({ name: 'code_ata_mentah', nullable: true })
  codeAtaMentah: string;

  @Column({ name: 'mtbo_cycle', nullable: true })
  mtboCycle: number;

  @Column({ name: 'mtbo_hours', nullable: true })
  mtboHours: number;

  @Column({ name: 'mtbo_val', nullable: true })
  mtboVal: number;

  @Column({ name: 'mtbo_var', nullable: true })
  mtboVar: string;

  @Column({ name: 'for_ac', nullable: true })
  forAc: number;

  @Column({ name: 'id_condition_monitoring', nullable: true })
  idConditionMonitoring: string;
}
