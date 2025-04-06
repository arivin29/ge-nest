import { Column, Entity } from "typeorm";

@Entity("user_tokens", { schema: "erp_pelanggan" })
export class UserTokens {
  @Column("varchar", { primary: true, name: "id", length: 36 })
  id: string;

  @Column("varchar", { name: "id_user", nullable: true, length: 36 })
  idUser: string | null;

  @Column("text", { name: "refresh_token", nullable: true })
  refreshToken: string | null;

  @Column("text", { name: "user_agent", nullable: true })
  userAgent: string | null;

  @Column("text", { name: "ip_address", nullable: true })
  ipAddress: string | null;

  @Column("timestamp", {
    name: "created_at",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date | null;
}
