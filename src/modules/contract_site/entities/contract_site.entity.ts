import { Column, Entity, Index } from "typeorm";

@Index("id_contract", ["idContract"], {})
@Index("id_site", ["idClientSite"], {})
@Entity("contract_site", { schema: "erp_pelanggan" })
export class ContractSite {
  @Column("varchar", { primary: true, name: "id_contract_site", length: 36 })
  idContractSite: string;

  @Column("varchar", { name: "id_contract", length: 36 })
  idContract: string;

  @Column("varchar", { name: "id_client_site", length: 36 })
  idClientSite: string;

  @Column("varchar", {
    name: "status_contract_site",
    nullable: true,
    length: 60,
  })
  statusContractSite: string | null;

  @Column("int", { name: "biaya_diawal", nullable: true })
  biayaDiawal: number | null;

  @Column("int", { name: "biaya_bulanan", nullable: true })
  biayaBulanan: number | null;

  @Column("int", { name: "biaya_akhir", nullable: true })
  biayaAkhir: number | null;

  @Column("int", {
    name: "jumlah_jadwal_per_bulan",
    nullable: true,
    default: () => "'0'",
  })
  jumlahJadwalPerBulan: number | null;

  @Column("text", { name: "catatan", nullable: true })
  catatan: string | null;

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
}
