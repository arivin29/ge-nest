import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'position', schema: 'erp_amims' })
export class AmimsPosition {
  @PrimaryColumn({ name: 'id_position' })
  idPosition: string;

  @Column({ name: 'position', nullable: true })
  position: string;

  @Column({ name: 'code', nullable: true })
  code: string;

  @Column({ name: 'is_deleted', nullable: true })
  isDeleted: number;

  @Column({ name: 'description', nullable: true })
  description: string;
}
