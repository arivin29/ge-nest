import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'media', schema: 'erp_document' })
export class DocumentMedia {
  @Column({ name: 'created_at', nullable: true })
  createdAt: string;

  @PrimaryColumn({ name: 'id_media' })
  idMedia: string;

  @Column({ name: 'id_user', nullable: true })
  idUser: string;

  @Column({ name: 'modul', nullable: true })
  modul: string;

  @Column({ name: 'module_id', nullable: true })
  moduleId: string;

  @Column({ name: 'nama_file', nullable: true })
  namaFile: string;

  @Column({ name: 'updated_at', nullable: true })
  updatedAt: string;
}
