import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'work_schedule', schema: 'erp_pelanggan' })
export class PelangganWorkSchedule {
  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'created_by', nullable: true })
  createdBy: string;

  @Column({ name: 'duration_working', nullable: true })
  durationWorking: number;

  @Column({ name: 'end_working', nullable: true })
  endWorking: string;

  @Column({ name: 'id_client', nullable: true })
  idClient: string;

  @Column({ name: 'id_contract', nullable: true })
  idContract: string;

  @Column({ name: 'id_contract_site', nullable: true })
  idContractSite: string;

  @Column({ name: 'id_contract_site_service' })
  idContractSiteService: string;

  @Column({ name: 'id_user', nullable: true })
  idUser: string;

  @PrimaryColumn({ name: 'id_work_schedule' })
  idWorkSchedule: string;

  @Column({ name: 'keterangan', nullable: true })
  keterangan: string;

  @Column({ name: 'nomor_work_schedule', nullable: true })
  nomorWorkSchedule: string;

  @Column({ name: 'start_working', nullable: true })
  startWorking: string;

  @Column({ name: 'status_work_schedule', nullable: true })
  statusWorkSchedule: string;

  @Column({ name: 'tanggal_work_schedule' })
  tanggalWorkSchedule: string;

  @Column({ name: 'tipe_work_schedule', nullable: true })
  tipeWorkSchedule: string;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;

  @Column({ name: 'updated_by', nullable: true })
  updatedBy: string;
}
