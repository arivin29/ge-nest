import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'condition_monitoring', schema: 'erp_amims' })
export class AmimsConditionMonitoring {
  @PrimaryColumn({ name: 'id_condition_monitoring' })
  idConditionMonitoring: string;

  @Column({ name: 'condition_monitoring', nullable: true })
  conditionMonitoring: string;

  @Column({ name: 'childname_condition_monitoring', nullable: true })
  childnameConditionMonitoring: string;

  @Column({ name: 'is_deleted', nullable: true })
  isDeleted: number;

  @Column({ name: 'code', nullable: true })
  code: string;
}
