import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_siup', schema: 'new_bpt' })
export class NewBptOnlSiup {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @Column({ name: 'id_kbli' })
  idKbli: string;

  @PrimaryColumn({ name: 'id_onl_siup' })
  idOnlSiup: number;

  @Column({ name: 'kelembagaan' })
  kelembagaan: string;

  @Column({ name: 'nilai_kekayaan_bersih' })
  nilaiKekayaanBersih: number;

  @Column({ name: 'nomor_siup_pusat' })
  nomorSiupPusat: string;
}
