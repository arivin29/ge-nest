import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 't_izin_bap', schema: 'new_bpt' })
export class NewBptTIzinBap {
  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'file' })
  file: string;

  @Column({ name: 'file2' })
  file2: string;

  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_t_izin_bap' })
  idTIzinBap: number;

  @Column({ name: 'id_user' })
  idUser: number;

  @Column({ name: 'tgl_upload', nullable: true })
  tglUpload: string;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;
}
