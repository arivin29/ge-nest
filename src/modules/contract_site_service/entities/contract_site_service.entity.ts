import { Column, Entity, Index } from "typeorm";

@Index("id_contract_site", ["idContractSite"], {})
@Index("id_service", ["idService"], {})
@Entity("contract_site_service", { schema: "erp_pelanggan" })
export class ContractSiteService {
  @Column("varchar", {
    primary: true,
    name: "id_contract_site_service",
    length: 36,
  })
  idContractSiteService: string;

  @Column("varchar", { name: "id_contract_site", length: 36 })
  idContractSite: string;

  @Column("varchar", { name: "id_service", length: 36 })
  idService: string;

  @Column("text", { name: "deskripsi_service", nullable: true })
  deskripsiService: string | null;

  @Column("int", {
    name: "frekuensi_per_bulan",
    nullable: true,
    default: () => "'0'",
  })
  frekuensiPerBulan: number | null;

  @Column("int", { name: "harga_custom", nullable: true })
  hargaCustom: number | null;

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
