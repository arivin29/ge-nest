import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_iptkswt', schema: 'new_bpt' })
export class NewBptOnlIptkswt {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_iptkswt' })
  idOnlIptkswt: number;

  @Column({ name: 'nama_tk' })
  namaTk: string;

  @Column({ name: 'penanggung_jawab' })
  penanggungJawab: string;
}
