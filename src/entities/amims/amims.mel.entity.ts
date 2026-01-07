import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'mel', schema: 'erp_amims' })
export class AmimsMel {
  @PrimaryColumn({ name: 'id_mel' })
  idMel: string;

  @Column({ name: 'mel', nullable: true })
  mel: string;

  @Column({ name: 'day', nullable: true })
  day: number;

  @Column({ name: 'description_mel', nullable: true })
  descriptionMel: string;
}
