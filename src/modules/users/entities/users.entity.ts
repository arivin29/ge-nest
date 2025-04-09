import { Exclude } from "class-transformer";
import { Column, Entity, Index } from "typeorm";

@Index("email", ["email"], { unique: true })
@Entity("users", { schema: "erp_pelanggan" })
export class Users {
    @Column("varchar", { primary: true, name: "id_users", length: 36 })
    idUsers: string;

    @Column("varchar", { name: "email", unique: true, length: 100 })
    email: string;

    @Exclude()
    @Column("text", { name: "password" })
    password: string;

    @Column("varchar", { name: "nama", nullable: true, length: 100 })
    nama: string | null;

    @Column("varchar", {
        name: "status",
        nullable: true,
        length: 20,
        default: () => "'pending'",
    })
    status: string | null;

    @Column("tinyint", {
        name: "wajib_reset_password",
        nullable: true,
        width: 1,
        default: () => "'1'",
    })
    wajibResetPassword: boolean | null;

    @Column("timestamp", { name: "last_login", nullable: true })
    lastLogin: Date | null;

    @Column("timestamp", {
        name: "created_at",
        nullable: true,
        default: () => "CURRENT_TIMESTAMP",
    })
    createdAt: Date | null;

    @Column("varchar", { name: "id_user_group", nullable: true, length: 36 })
    idUserGroup: string | null;
}
