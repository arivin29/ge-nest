import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_iuoh', schema: 'new_bpt' })
export class NewBptOnlIuoh {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_iuoh' })
  idOnlIuoh: number;

  @Column({ name: 'penanggung_jawab' })
  penanggungJawab: string;
}
