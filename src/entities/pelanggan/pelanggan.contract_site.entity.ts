import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'contract_site', schema: 'erp_pelanggan' })
export class PelangganContractSite {
  @PrimaryColumn({ name: 'id_contract_site' })
  idContractSite: string;

  @Column({ name: 'id_contract' })
  idContract: string;

  @Column({ name: 'id_client_site' })
  idClientSite: string;

  @Column({ name: 'status_contract_site' })
  statusContractSite: string;

  @Column({ name: 'biaya_diawal' })
  biayaDiawal: number;

  @Column({ name: 'biaya_bulanan' })
  biayaBulanan: number;

  @Column({ name: 'biaya_akhir' })
  biayaAkhir: number;

  @Column({ name: 'jumlah_jadwal_per_bulan' })
  jumlahJadwalPerBulan: number;

  @Column({ name: 'catatan' })
  catatan: string;

  @Column({ name: 'created_at' })
  createdAt: string;

  @Column({ name: 'updated_at' })
  updatedAt: string;
}
