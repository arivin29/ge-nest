import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_ikke', schema: 'new_bpt' })
export class NewBptOnlIkke {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_ikke' })
  idOnlIkke: number;

  @Column({ name: 'klasifikasi_klinik' })
  klasifikasiKlinik: string;

  @Column({ name: 'rekom' })
  rekom: string;
}
