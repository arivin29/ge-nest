import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'position', schema: 'erp_amims' })
export class AmimsPosition {
  @Column({ name: 'code', nullable: true })
  code: string;

  @Column({ name: 'description', nullable: true })
  description: string;

  @PrimaryColumn({ name: 'id_position' })
  idPosition: string;

  @Column({ name: 'is_deleted', nullable: true })
  isDeleted: number;

  @Column({ name: 'position', nullable: true })
  position: string;
}
