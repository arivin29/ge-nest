import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'contract', schema: 'erp_pelanggan' })
export class Contract {
  @PrimaryColumn({ name: 'id_contract' })
  idContract: string;

  @Column({ name: 'id_client' })
  idClient: string;

  @Column({ name: 'nomor_kontrak' })
  nomorKontrak: string;

  @Column({ name: 'tanggal_kontrak' })
  tanggalKontrak: string;

  @Column({ name: 'tanggal_mulai' })
  tanggalMulai: string;

  @Column({ name: 'tanggal_akhir' })
  tanggalAkhir: string;

  @Column({ name: 'durasi_bulan' })
  durasiBulan: number;

  @Column({ name: 'status_contract' })
  statusContract: string;

  @Column({ name: 'ref_kontrak_sebelumnya' })
  refKontrakSebelumnya: string;

  @Column({ name: 'nama_sales' })
  namaSales: string;

  @Column({ name: 'fee_sales' })
  feeSales: number;

  @Column({ name: 'presentase_fee' })
  presentaseFee: number;

  @Column({ name: 'nilai_kontrak' })
  nilaiKontrak: number;

  @Column({ name: 'nilai_diawal' })
  nilaiDiawal: number;

  @Column({ name: 'nilai_bulanan' })
  nilaiBulanan: number;

  @Column({ name: 'nilai_akhir' })
  nilaiAkhir: number;

  @Column({ name: 'is_auto_invoice' })
  isAutoInvoice: boolean;

  @Column({ name: 'catatan_kontrak' })
  catatanKontrak: string;

  @Column({ name: 'dokumen_url' })
  dokumenUrl: string;

  @Column({ name: 'created_at' })
  createdAt: string;

  @Column({ name: 'updated_at' })
  updatedAt: string;

  @Column({ name: 'id_contract_jenis' })
  idContractJenis: string;

  @Column({ name: 'id_kantor' })
  idKantor: string;

  @Column({ name: 'id_document' })
  idDocument: string;
}
