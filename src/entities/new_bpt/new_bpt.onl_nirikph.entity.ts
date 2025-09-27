import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_nirikph', schema: 'new_bpt' })
export class NewBptOnlNirikph {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_nirikph' })
  idOnlNirikph: number;

  @Column({ name: 'jarak' })
  jarak: number;

  @Column({ name: 'jenis' })
  jenis: string;

  @Column({ name: 'kapasitas' })
  kapasitas: string;

  @Column({ name: 'luas' })
  luas: number;

  @Column({ name: 'nama' })
  nama: string;

  @Column({ name: 'nos' })
  nos: string;

  @Column({ name: 'perihals' })
  perihals: string;

  @Column({ name: 'tgls' })
  tgls: string;
}
