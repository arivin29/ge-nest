import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 't_form_pendukung', schema: 'new_bpt' })
export class NewBptTFormPendukung {
  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'file' })
  file: string;

  @PrimaryColumn({ name: 'id_t_form_pendukung' })
  idTFormPendukung: number;

  @Column({ name: 'nama' })
  nama: string;

  @Column({ name: 'tgl', default: () => 'CURRENT_TIMESTAMP' })
  tgl: string;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;
}
