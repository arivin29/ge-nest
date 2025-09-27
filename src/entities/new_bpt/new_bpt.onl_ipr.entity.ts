import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_ipr', schema: 'new_bpt' })
export class NewBptOnlIpr {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_ipr' })
  idOnlIpr: number;

  @Column({ name: 'jenis_reklame' })
  jenisReklame: string;

  @Column({ name: 'lebar' })
  lebar: number;

  @Column({ name: 'muka' })
  muka: number;

  @Column({ name: 'naskah_reklame' })
  naskahReklame: string;

  @Column({ name: 'panjang' })
  panjang: number;

  @Column({ name: 'status_lahan' })
  statusLahan: string;

  @Column({ name: 'tinggi' })
  tinggi: number;
}
