import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'part_actype', schema: 'erp_amims' })
export class AmimsPartActype {
  @PrimaryColumn({ name: 'id_part_actype' })
  idPartActype: string;

  @Column({ name: 'id_mpart', nullable: true })
  idMpart: string;

  @Column({ name: 'id_actype_old', nullable: true })
  idActypeOld: string;

  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;

  @Column({ name: 'id_actype', nullable: true })
  idActype: string;
}
