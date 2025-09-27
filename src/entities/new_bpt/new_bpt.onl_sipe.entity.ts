import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_sipe', schema: 'new_bpt' })
export class NewBptOnlSipe {
  @Column({ name: 'alamat_sarana' })
  alamatSarana: string;

  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_sipe' })
  idOnlSipe: number;

  @Column({ name: 'nama_sarana' })
  namaSarana: string;

  @Column({ name: 'nomor_stre' })
  nomorStre: string;
}
