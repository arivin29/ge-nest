import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'part_alternative', schema: 'erp_amims' })
export class AmimsPartAlternative {
  @PrimaryColumn({ name: 'id_part_alternative' })
  idPartAlternative: string;

  @Column({ name: 'for_mpart', nullable: true })
  forMpart: string;

  @Column({ name: 'id_mpart', nullable: true })
  idMpart: string;
}
