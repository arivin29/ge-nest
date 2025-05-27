import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'maintenance_code_reference', schema: 'erp_amims' })
export class AmimsMaintenanceCodeReference {
  @PrimaryColumn({ name: 'id_maintenance_code_reference' })
  idMaintenanceCodeReference: string;

  @Column({ name: 'id_lib_reference', nullable: true })
  idLibReference: string;

  @Column({ name: 'id_maintenance_code', nullable: true })
  idMaintenanceCode: string;
}
