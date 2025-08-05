import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'maintenance_code_form_issued', schema: 'erp_amims' })
export class AmimsMaintenanceCodeFormIssued {
  @Column({ name: 'id_lib_form_issued', nullable: true })
  idLibFormIssued: string;

  @Column({ name: 'id_maintenance_code', nullable: true })
  idMaintenanceCode: string;

  @PrimaryColumn({ name: 'id_maintenance_code_form_issued' })
  idMaintenanceCodeFormIssued: string;
}
