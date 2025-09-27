import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_io', schema: 'new_bpt' })
export class NewBptOnlIo {
  @Column({ name: 'badan_usaha' })
  badanUsaha: string;

  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_io' })
  idOnlIo: number;

  @Column({ name: 'penanggung_jawab' })
  penanggungJawab: string;
}
