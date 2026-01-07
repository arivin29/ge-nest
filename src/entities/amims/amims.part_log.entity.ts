import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'part_log', schema: 'erp_amims' })
export class AmimsPartLog {
  @PrimaryColumn({ name: 'id_part_log' })
  idPartLog: string;

  @Column({ name: 'id_position', nullable: true })
  idPosition: string;

  @Column({ name: 'date_log', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  dateLog: string;

  @Column({ name: 'id_user', nullable: true })
  idUser: string;

  @Column({ name: 'activity', nullable: true })
  activity: string;

  @Column({ name: 'id_part', nullable: true })
  idPart: string;

  @Column({ name: 'qty_log', nullable: true })
  qtyLog: number;

  @Column({ name: 'id_site', nullable: true })
  idSite: string;

  @Column({ name: 'status_on_inventory', nullable: true })
  statusOnInventory: string;

  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;

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

  @Column({ name: 'tbo_cycle', nullable: true })
  tboCycle: number;

  @Column({ name: 'tbo_var', nullable: true })
  tboVar: string;

  @Column({ name: 'tbo_val', nullable: true })
  tboVal: number;

  @Column({ name: 'tbo_hours', nullable: true })
  tboHours: number;

  @Column({ name: 'from_module', nullable: true })
  fromModule: string;

  @Column({ name: 'id_module', nullable: true })
  idModule: string;

  @Column({ name: 'number_module', nullable: true })
  numberModule: string;

  @Column({ name: 'to_location', nullable: true })
  toLocation: string;

  @Column({ name: 'old_id', nullable: true })
  oldId: string;
}
