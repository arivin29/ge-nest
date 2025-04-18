import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'contract_site', schema: 'erp_pelanggan' })
export class PelangganContractSite {
  @PrimaryColumn({ name: 'id_contract_site' })
  idContractSite: string;

  @Column({ name: 'id_contract' })
  idContract: string;

  @Column({ name: 'id_client_site' })
  idClientSite: string;

  @Column({ name: 'status_contract_site', nullable: true })
  statusContractSite: string;

  @Column({ name: 'biaya_diawal', nullable: true })
  biayaDiawal: number;

  @Column({ name: 'biaya_bulanan', nullable: true })
  biayaBulanan: number;

  @Column({ name: 'biaya_akhir', nullable: true })
  biayaAkhir: number;

  @Column({ name: 'jumlah_jadwal_per_bulan', nullable: true })
  jumlahJadwalPerBulan: number;

  @Column({ name: 'catatan', nullable: true })
  catatan: string;

  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;
}
