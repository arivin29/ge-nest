// src/modules/perusahaan/entities/perusahaan.entity.ts
import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity({ name: 'perusahaan_master', schema: 'erp' })
export class Perusahaan {
    @PrimaryColumn({ type: 'varchar', length: 36 })
    id_perusahaan: string;

    @Column({ type: 'varchar', length: 50, unique: true, nullable: true })
    kode_perusahaan: string;

    @Column({ type: 'varchar', length: 255, nullable: true })
    nama_perusahaan: string;

    @Column({ type: 'varchar', length: 100, nullable: true })
    domain_login: string;

    @Column({ type: 'varchar', length: 255, nullable: true })
    host_db: string;

    @Column({ type: 'varchar', length: 100, nullable: true })
    nama_database: string;

    @Column({ type: 'varchar', length: 100, nullable: true })
    username_db: string;

    @Column({ type: 'text', nullable: true })
    password_db: string;

    @Column({ type: 'int', default: 3306, nullable: true })
    port: number; 

    @Column({ type: 'varchar', length: 20, default: '1.0.0', nullable: true })
    versi_erp: string;

    @Column({ type: 'datetime', nullable: true })
    last_update_at: Date;

    @Column({ type: 'text', nullable: true })
    logo_url: string;

    @Column({ type: 'text', nullable: true })
    alamat: string;

    @Column({ type: 'varchar', length: 100, nullable: true })
    kontak_admin: string;

    @Column({ type: 'text', nullable: true })
    email_admin: string;

    @Column({ type: 'tinyint', default: 1, nullable: true })
    is_aktif: number;

    @Column({ type: 'datetime', nullable: true })
    created_at: Date;

    @Column({ type: 'datetime', nullable: true })
    updated_at: Date;
}
