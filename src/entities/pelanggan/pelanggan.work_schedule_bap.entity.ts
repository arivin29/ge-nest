import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'work_schedule_bap', schema: 'erp_pelanggan' })
export class PelangganWorkScheduleBap {
  @PrimaryColumn({ name: 'id_work_schedule_bap' })
  idWorkScheduleBap: string;

  @Column({ name: 'id_work_schedule' })
  idWorkSchedule: string;

  @Column({ name: 'id_contract', nullable: true })
  idContract: string;

  @Column({ name: 'id_contract_site', nullable: true })
  idContractSite: string;

  @Column({ name: 'id_client' })
  idClient: string;

  @Column({ name: 'nomor_bap' })
  nomorBap: string;

  @Column({ name: 'tanggal_mulai' })
  tanggalMulai: string;

  @Column({ name: 'tanggal_selesai', nullable: true })
  tanggalSelesai: string;

  @Column({ name: 'judul_bap' })
  judulBap: string;

  @Column({ name: 'id_client_contact' })
  idClientContact: string;

  @Column({ name: 'lokasi_pekerjaan', nullable: true })
  lokasiPekerjaan: string;

  @Column({ name: 'uraian_pekerjaan', nullable: true })
  uraianPekerjaan: string;

  @Column({ name: 'hasil_pekerjaan', nullable: true })
  hasilPekerjaan: string;

  @Column({ name: 'pesan_pelanggan', nullable: true })
  pesanPelanggan: string;

  @Column({ name: 'keterangan_tambahan', nullable: true })
  keteranganTambahan: string;

  @Column({ name: 'status_work_schedule_bap', nullable: true })
  statusWorkScheduleBap: string;

  @Column({ name: 'created_by', nullable: true })
  createdBy: string;

  @Column({ name: 'approved_by', nullable: true })
  approvedBy: string;

  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;
}
