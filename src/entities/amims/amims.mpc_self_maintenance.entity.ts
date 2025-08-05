import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'mpc_self_maintenance', schema: 'erp_amims' })
export class AmimsMpcSelfMaintenance {
  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'date_acc_qa', nullable: true })
  dateAccQa: string;

  @Column({ name: 'date_maintenance', nullable: true })
  dateMaintenance: string;

  @Column({ name: 'doc', nullable: true })
  doc: string;

  @Column({ name: 'id_engineer_rti', nullable: true })
  idEngineerRti: string;

  @PrimaryColumn({ name: 'id_mpc_self_maintenance' })
  idMpcSelfMaintenance: string;

  @Column({ name: 'id_site', nullable: true })
  idSite: string;

  @Column({ name: 'id_user_maintenance', nullable: true })
  idUserMaintenance: string;

  @Column({ name: 'id_user_qa', nullable: true })
  idUserQa: string;

  @Column({ name: 'number_maintenance', nullable: true })
  numberMaintenance: string;

  @Column({ name: 'report_maintenance', nullable: true })
  reportMaintenance: string;

  @Column({ name: 'status_maintenance', nullable: true })
  statusMaintenance: string;

  @Column({ name: 'type_maintenance', nullable: true })
  typeMaintenance: string;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;
}
