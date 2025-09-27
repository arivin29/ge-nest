import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'log', schema: 'new_bpt' })
export class NewBptLog {
  @PrimaryColumn({ name: 'id_log' })
  idLog: number;

  @Column({ name: 'id_user' })
  idUser: number;

  @Column({ name: 'jenis_log' })
  jenisLog: string;

  @Column({ name: 'keterangan' })
  keterangan: string;

  @Column({ name: 'tanggal', default: () => 'CURRENT_TIMESTAMP' })
  tanggal: string;
}
