import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'life_time_limit', schema: 'erp_amims' })
export class AmimsLifeTimeLimit {
  @Column({ name: 'childname_life_time_limit', nullable: true })
  childnameLifeTimeLimit: string;

  @PrimaryColumn({ name: 'id_life_time_limit' })
  idLifeTimeLimit: string;

  @Column({ name: 'is_deleted', nullable: true })
  isDeleted: number;

  @Column({ name: 'life_time_limit', nullable: true })
  lifeTimeLimit: string;
}
