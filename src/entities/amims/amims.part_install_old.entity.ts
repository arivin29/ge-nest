import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'part_install_old', schema: 'erp_amims' })
export class AmimsPartInstallOld {
  @Column({ name: 'bin', nullable: true })
  bin: string;

  @Column({ name: 'created_at', nullable: true })
  createdAt: string;

  @Column({ name: 'date_install', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  dateInstall: string;

  @Column({ name: 'due_overhaul_c', nullable: true })
  dueOverhaulC: number;

  @Column({ name: 'due_overhaul_h', nullable: true })
  dueOverhaulH: number;

  @Column({ name: 'due_overhaul_value', nullable: true })
  dueOverhaulValue: number;

  @Column({ name: 'figure_index', nullable: true })
  figureIndex: string;

  @Column({ name: 'id_aircraft', nullable: true })
  idAircraft: string;

  @Column({ name: 'id_engineer_pris_item', nullable: true })
  idEngineerPrisItem: string;

  @Column({ name: 'id_part', nullable: true })
  idPart: string;

  @Column({ name: 'id_part_install', nullable: true })
  idPartInstall: string;

  @PrimaryColumn({ name: 'id_part_install_old' })
  idPartInstallOld: string;

  @Column({ name: 'installed_inspection_c', nullable: true })
  installedInspectionC: number;

  @Column({ name: 'installed_inspection_h', nullable: true })
  installedInspectionH: number;

  @Column({ name: 'installed_inspection_value', nullable: true })
  installedInspectionValue: number;

  @Column({ name: 'installed_overhaul_c', nullable: true })
  installedOverhaulC: number;

  @Column({ name: 'installed_overhaul_h', nullable: true })
  installedOverhaulH: number;

  @Column({ name: 'installed_overhaul_value', nullable: true })
  installedOverhaulValue: number;

  @Column({ name: 'isfeatured', nullable: true })
  isfeatured: string;

  @Column({ name: 'item_index', nullable: true })
  itemIndex: string;

  @Column({ name: 'old_id', nullable: true })
  oldId: string;

  @Column({ name: 'parent', nullable: true })
  parent: string;

  @Column({ name: 'qty_install', nullable: true })
  qtyInstall: number;

  @Column({ name: 'status_install', nullable: true })
  statusInstall: string;

  @Column({ name: 'updated_at', nullable: true })
  updatedAt: string;
}
