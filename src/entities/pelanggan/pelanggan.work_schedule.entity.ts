import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'work_schedule', schema: 'erp_pelanggan' })
export class PelangganWorkSchedule {
  @PrimaryColumn({ name: 'id_work_schedule' })
  idWorkSchedule: string;

  @Column({ name: 'id_contract_site' })
  idContractSite: string;

  @Column({ name: 'id_contract_site_service' })
  idContractSiteService: string;

  @Column({ name: 'tanggal_work_schedule' })
  tanggalWorkSchedule: string;

  @Column({ name: 'tipe_work_schedule' })
  tipeWorkSchedule: string;

  @Column({ name: 'status_work_schedule' })
  statusWorkSchedule: string;

  @Column({ name: 'keterangan' })
  keterangan: string;

  @Column({ name: 'created_by' })
  createdBy: string;

  @Column({ name: 'updated_by' })
  updatedBy: string;

  @Column({ name: 'created_at' })
  createdAt: string;

  @Column({ name: 'updated_at' })
  updatedAt: string;
}
