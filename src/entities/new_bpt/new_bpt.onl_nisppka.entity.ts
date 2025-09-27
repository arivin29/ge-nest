import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_nisppka', schema: 'new_bpt' })
export class NewBptOnlNisppka {
  @Column({ name: 'alasan' })
  alasan: string;

  @Column({ name: 'bidang_usaha' })
  bidangUsaha: string;

  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_nisppka' })
  idOnlNisppka: number;

  @Column({ name: 'peserta_asing' })
  pesertaAsing: string;

  @Column({ name: 'peserta_indo' })
  pesertaIndo: string;
}
