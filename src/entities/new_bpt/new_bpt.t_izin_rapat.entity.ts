import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 't_izin_rapat', schema: 'new_bpt' })
export class NewBptTIzinRapat {
  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'file', nullable: true })
  file: string;

  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_t_izin_rapat' })
  idTIzinRapat: number;

  @Column({ name: 'id_user' })
  idUser: number;

  @Column({ name: 'tgl_upl_rapat', nullable: true })
  tglUplRapat: string;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;
}
