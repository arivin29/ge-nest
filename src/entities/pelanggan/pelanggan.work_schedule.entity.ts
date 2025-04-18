import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'work_schedule', schema: 'erp_pelanggan' })
export class PelangganWorkSchedule {
  @PrimaryColumn({ name: 'id_work_schedule' })
  idWorkSchedule: string;

  @Column({ name: 'id_contract_site', nullable: true })
  idContractSite: string;

  @Column({ name: 'id_contract_site_service' })
  idContractSiteService: string;

  @Column({ name: 'tanggal_work_schedule' })
  tanggalWorkSchedule: string;

  @Column({ name: 'tipe_work_schedule', nullable: true })
  tipeWorkSchedule: string;

  @Column({ name: 'status_work_schedule', nullable: true })
  statusWorkSchedule: string;

  @Column({ name: 'keterangan', nullable: true })
  keterangan: string;

  @Column({ name: 'created_by', nullable: true })
  createdBy: string;

  @Column({ name: 'updated_by', nullable: true })
  updatedBy: string;

  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;
}
