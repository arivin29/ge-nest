import { Column, Entity, Index } from "typeorm";

@Index("id_schedule", ["idSchedule"], {})
@Entity("work_schedule_teknisi", { schema: "erp_pelanggan" })
export class WorkScheduleTeknisi {
  @Column("varchar", { primary: true, name: "id_schedule_teknisi", length: 36 })
  idScheduleTeknisi: string;

  @Column("varchar", { name: "id_schedule", length: 36 })
  idSchedule: string;

  @Column("varchar", { name: "id_teknisi", length: 36 })
  idTeknisi: string;

  @Column("varchar", { name: "nama_teknisi", length: 136 })
  namaTeknisi: string;

  @Column("varchar", { name: "peran", nullable: true, length: 100 })
  peran: string | null;

  @Column("text", { name: "catatan", nullable: true })
  catatan: string | null;

  @Column("datetime", {
    name: "created_at",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date | null;
}
