import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'log_user', schema: 'erp_amims' })
export class AmimsLogUser {
  @PrimaryColumn({ name: 'id_log_user' })
  idLogUser: string;

  @Column({ name: 'type_log', nullable: true })
  typeLog: string;

  @Column({ name: 'type_work', nullable: true })
  typeWork: string;

  @Column({ name: 'type_id_key', nullable: true })
  typeIdKey: string;

  @Column({ name: 'id_user', nullable: true })
  idUser: string;

  @Column({ name: 'date_log', nullable: true })
  dateLog: string;

  @Column({ name: 'type_value', nullable: true })
  typeValue: string;

  @Column({ name: 'method', nullable: true })
  method: string;

  @Column({ name: 'method_value', nullable: true })
  methodValue: string;
}
