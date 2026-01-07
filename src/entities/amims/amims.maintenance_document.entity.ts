import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'maintenance_document', schema: 'erp_amims' })
export class AmimsMaintenanceDocument {
  @PrimaryColumn({ name: 'id_maintenance_document' })
  idMaintenanceDocument: string;

  @Column({ name: 'id_maintenance', nullable: true })
  idMaintenance: string;

  @Column({ name: 'document_type', nullable: true })
  documentType: string;

  @Column({ name: 'document_title', nullable: true })
  documentTitle: string;

  @Column({ name: 'revision', nullable: true })
  revision: string;

  @Column({ name: 'status_aktif', nullable: true })
  statusAktif: string;

  @Column({ name: 'created_at', nullable: true })
  createdAt: string;

  @Column({ name: 'updated_at', nullable: true })
  updatedAt: string;
}
