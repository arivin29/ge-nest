import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'actype', schema: 'erp_amims' })
export class AmimsActype {
  @Column({ name: 'ac_category', nullable: true })
  acCategory: string;

  @Column({ name: 'ac_manufacture', nullable: true })
  acManufacture: string;

  @Column({ name: 'actype', nullable: true })
  actype: string;

  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'description', nullable: true })
  description: string;

  @Column({ name: 'e_flight', nullable: true })
  eFlight: string;

  @Column({ name: 'e_starts', nullable: true })
  eStarts: string;

  @Column({ name: 'engine_manufacture', nullable: true })
  engineManufacture: string;

  @Column({ name: 'engine_type', nullable: true })
  engineType: string;

  @Column({ name: 'hash_n1', nullable: true })
  hashN1: string;

  @Column({ name: 'hash_n2', nullable: true })
  hashN2: string;

  @PrimaryColumn({ name: 'id_actype' })
  idActype: string;

  @Column({ name: 'is_deleted', nullable: true })
  isDeleted: number;

  @Column({ name: 'number_engine', nullable: true })
  numberEngine: number;

  @Column({ name: 'old_id', nullable: true })
  oldId: string;

  @Column({ name: 'status_type', nullable: true })
  statusType: string;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;

  @Column({ name: 'wingtype', nullable: true })
  wingtype: string;
}
