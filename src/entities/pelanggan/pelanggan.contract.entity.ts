import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'contract', schema: 'erp_pelanggan' })
export class PelangganContract {
  @PrimaryColumn({ name: 'id_contract' })
  idContract: string;

  @Column({ name: 'id_client' })
  idClient: string;

  @Column({ name: 'nomor_kontrak' })
  nomorKontrak: string;

  @Column({ name: 'tanggal_kontrak', nullable: true })
  tanggalKontrak: string;

  @Column({ name: 'tanggal_mulai' })
  tanggalMulai: string;

  @Column({ name: 'tanggal_akhir' })
  tanggalAkhir: string;

  @Column({ name: 'durasi_bulan' })
  durasiBulan: number;

  @Column({ name: 'status_contract', nullable: true })
  statusContract: string;

  @Column({ name: 'ref_kontrak_sebelumnya', nullable: true })
  refKontrakSebelumnya: string;

  @Column({ name: 'nama_sales', nullable: true })
  namaSales: string;

  @Column({ name: 'fee_sales', nullable: true })
  feeSales: number;

  @Column({ name: 'presentase_fee', nullable: true })
  presentaseFee: number;

  @Column({ name: 'nilai_kontrak' })
  nilaiKontrak: number;

  @Column({ name: 'nilai_diawal', nullable: true })
  nilaiDiawal: number;

  @Column({ name: 'nilai_bulanan', nullable: true })
  nilaiBulanan: number;

  @Column({ name: 'nilai_akhir', nullable: true })
  nilaiAkhir: number;

  @Column({ name: 'is_auto_invoice', nullable: true })
  isAutoInvoice: boolean;

  @Column({ name: 'catatan_kontrak', nullable: true })
  catatanKontrak: string;

  @Column({ name: 'dokumen_url', nullable: true })
  dokumenUrl: string;

  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;

  @Column({ name: 'id_contract_jenis' })
  idContractJenis: string;

  @Column({ name: 'id_kantor' })
  idKantor: string;

  @Column({ name: 'id_document', nullable: true })
  idDocument: string;
}
