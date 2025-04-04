import { Column, Entity, Index } from "typeorm";

@Index("id_contract_site_service", ["idContractSiteService"], {})
@Entity("work_schedule", { schema: "erp_pelanggan" })
export class WorkSchedule {
  @Column("varchar", { primary: true, name: "id_schedule", length: 36 })
  idSchedule: string;

  @Column("varchar", { name: "id_contract_site", nullable: true, length: 36 })
  idContractSite: string | null;

  @Column("varchar", { name: "id_contract_site_service", length: 36 })
  idContractSiteService: string;

  @Column("date", { name: "tanggal_rencana" })
  tanggalRencana: string;

  @Column("varchar", { name: "tipe_schedule", nullable: true, length: 50 })
  tipeSchedule: string | null;

  @Column("varchar", {
    name: "status_schedule",
    nullable: true,
    length: 50,
    default: () => "'terjadwal'",
  })
  statusSchedule: string | null;

  @Column("text", { name: "keterangan", nullable: true })
  keterangan: string | null;

  @Column("varchar", { name: "created_by", nullable: true, length: 100 })
  createdBy: string | null;

  @Column("varchar", { name: "updated_by", nullable: true, length: 100 })
  updatedBy: string | null;

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
