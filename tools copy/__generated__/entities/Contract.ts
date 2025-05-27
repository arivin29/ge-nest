import { Column, Entity, Index } from "typeorm";

@Index("id_client", ["idClient"], {})
@Index("id_kontrak_sebelumnya", ["refKontrakSebelumnya"], {})
@Index("nomor_kontrak", ["nomorKontrak"], { unique: true })
@Entity("contract", { schema: "erp_pelanggan" })
export class Contract {
  @Column("varchar", { primary: true, name: "id_contract", length: 36 })
  idContract: string;

  @Column("varchar", { name: "id_client", length: 36 })
  idClient: string;

  @Column("varchar", {
    name: "nomor_kontrak",
    nullable: true,
    unique: true,
    length: 100,
  })
  nomorKontrak: string | null;

  @Column("date", { name: "tanggal_kontrak", nullable: true })
  tanggalKontrak: string | null;

  @Column("date", { name: "tanggal_mulai", nullable: true })
  tanggalMulai: string | null;

  @Column("date", { name: "tanggal_akhir", nullable: true })
  tanggalAkhir: string | null;

  @Column("int", { name: "durasi_bulan", nullable: true })
  durasiBulan: number | null;

  @Column("varchar", { name: "status_contract", nullable: true, length: 50 })
  statusContract: string | null;

  @Column("varchar", {
    name: "ref_kontrak_sebelumnya",
    nullable: true,
    length: 36,
  })
  refKontrakSebelumnya: string | null;

  @Column("varchar", { name: "nama_sales", nullable: true, length: 255 })
  namaSales: string | null;

  @Column("int", { name: "fee_sales", nullable: true })
  feeSales: number | null;

  @Column("int", { name: "presentase_fee", nullable: true })
  presentaseFee: number | null;

  @Column("int", { name: "nilai_kontrak", nullable: true })
  nilaiKontrak: number | null;

  @Column("int", { name: "nilai_diawal", nullable: true })
  nilaiDiawal: number | null;

  @Column("int", { name: "nilai_bulanan", nullable: true })
  nilaiBulanan: number | null;

  @Column("int", { name: "nilai_akhir", nullable: true })
  nilaiAkhir: number | null;

  @Column("tinyint", {
    name: "is_auto_invoice",
    nullable: true,
    width: 1,
    default: () => "'1'",
  })
  isAutoInvoice: boolean | null;

  @Column("text", { name: "catatan_kontrak", nullable: true })
  catatanKontrak: string | null;

  @Column("text", { name: "dokumen_url", nullable: true })
  dokumenUrl: string | null;

  @Column("datetime", {
    name: "created_at",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date | null;

  @Column("datetime", {
    name: "updated_at",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  updatedAt: Date | null;

  @Column("varchar", { name: "id_contract_jenis", nullable: true, length: 36 })
  idContractJenis: string | null;

  @Column("varchar", {
    name: "id_kantor",
    nullable: true,
    length: 36,
    default: () => "'PST'",
  })
  idKantor: string | null;

  @Column("varchar", { name: "id_document", nullable: true, length: 36 })
  idDocument: string | null;
}
