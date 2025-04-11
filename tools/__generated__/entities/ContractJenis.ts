import { Column, Entity } from "typeorm";

@Entity("contract_jenis", { schema: "erp_pelanggan" })
export class ContractJenis {
  @Column("varchar", { primary: true, name: "id_contract_jenis", length: 36 })
  idContractJenis: string;

  @Column("varchar", { name: "contract_jenis", length: 100 })
  contractJenis: string;

  @Column("varchar", {
    name: "status_contract_jenis",
    nullable: true,
    length: 10,
    default: () => "'aktif'",
  })
  statusContractJenis: string | null;

  @Column("text", { name: "keterangan", nullable: true })
  keterangan: string | null;

  @Column("text", { name: "role", nullable: true })
  role: string | null;

  @Column("datetime", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("datetime", { name: "updated_at", nullable: true })
  updatedAt: Date | null;
}
