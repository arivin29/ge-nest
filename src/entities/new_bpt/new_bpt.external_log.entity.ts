import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'external_log', schema: 'new_bpt' })
export class NewBptExternalLog {
  @Column({ name: 'id_external' })
  idExternal: number;

  @PrimaryColumn({ name: 'id_external_log' })
  idExternalLog: number;

  @Column({ name: 'keterangan' })
  keterangan: string;

  @Column({ name: 'tanggal', default: () => 'CURRENT_TIMESTAMP' })
  tanggal: string;
}
