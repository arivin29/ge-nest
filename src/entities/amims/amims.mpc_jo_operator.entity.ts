import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'mpc_jo_operator', schema: 'erp_amims' })
export class AmimsMpcJoOperator {
  @Column({ name: 'id_mpc_jo', nullable: true })
  idMpcJo: string;

  @PrimaryColumn({ name: 'id_mpc_jo_operator' })
  idMpcJoOperator: string;

  @Column({ name: 'id_operator', nullable: true })
  idOperator: string;

  @Column({ name: 'job_desc', nullable: true })
  jobDesc: string;

  @Column({ name: 'operator', nullable: true })
  operator: string;

  @Column({ name: 'position', nullable: true })
  position: string;
}
