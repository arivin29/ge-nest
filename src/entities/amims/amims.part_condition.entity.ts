import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'part_condition', schema: 'erp_amims' })
export class AmimsPartCondition {
  @PrimaryColumn({ name: 'id_part_condition' })
  idPartCondition: string;

  @Column({ name: 'part_condition', nullable: true })
  partCondition: string;

  @Column({ name: 'childname_part_condition', nullable: true })
  childnamePartCondition: string;

  @Column({ name: 'is_deleted', nullable: true })
  isDeleted: number;
}
