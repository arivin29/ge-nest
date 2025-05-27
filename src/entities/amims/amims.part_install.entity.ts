import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'part_install', schema: 'erp_amims' })
export class AmimsPartInstall {
  @PrimaryColumn({ name: 'id_part_install' })
  idPartInstall: string;

  @Column({ name: 'id_aircraft', nullable: true })
  idAircraft: string;

  @Column({ name: 'parent', nullable: true })
  parent: string;

  @Column({ name: 'date_install', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  dateInstall: string;

  @Column({ name: 'bin', nullable: true })
  bin: string;

  @Column({ name: 'id_part', nullable: true })
  idPart: string;

  @Column({ name: 'installed_overhaul_c', nullable: true })
  installedOverhaulC: number;

  @Column({ name: 'installed_overhaul_h', nullable: true })
  installedOverhaulH: number;

  @Column({ name: 'installed_overhaul_value', nullable: true })
  installedOverhaulValue: number;

  @Column({ name: 'installed_parent_c', nullable: true })
  installedParentC: number;

  @Column({ name: 'installed_parent_h', nullable: true })
  installedParentH: number;

  @Column({ name: 'installed_parent_value', nullable: true })
  installedParentValue: number;

  @Column({ name: 'due_overhaul_c', nullable: true })
  dueOverhaulC: number;

  @Column({ name: 'due_overhaul_h', nullable: true })
  dueOverhaulH: number;

  @Column({ name: 'due_overhaul_value', nullable: true })
  dueOverhaulValue: number;

  @Column({ name: 'created_at', nullable: true })
  createdAt: string;

  @Column({ name: 'updated_at', nullable: true })
  updatedAt: string;

  @Column({ name: 'status_install', nullable: true })
  statusInstall: string;

  @Column({ name: 'isfeatured', nullable: true })
  isfeatured: string;

  @Column({ name: 'id_engineer_pris_item', nullable: true })
  idEngineerPrisItem: string;

  @Column({ name: 'qty_install', nullable: true })
  qtyInstall: number;

  @Column({ name: 'figure_index', nullable: true })
  figureIndex: string;

  @Column({ name: 'item_index', nullable: true })
  itemIndex: string;

  @Column({ name: 'old_id', nullable: true })
  oldId: string;

  @Column({ name: 'new_paren', nullable: true })
  newParen: string;

  @Column({ name: 'on_pris', nullable: true })
  onPris: string;

  @Column({ name: 'old_parent', nullable: true })
  oldParent: string;

  @Column({ name: 'installed_tsn_c', nullable: true })
  installedTsnC: number;

  @Column({ name: 'installed_tsn_h', nullable: true })
  installedTsnH: number;

  @Column({ name: 'old_id_part', nullable: true })
  oldIdPart: string;

  @Column({ name: 'top_parent', nullable: true })
  topParent: string;

  @Column({ name: 'ref_tech_log', nullable: true })
  refTechLog: string;
}
