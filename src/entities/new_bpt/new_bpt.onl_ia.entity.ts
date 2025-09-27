import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_ia', schema: 'new_bpt' })
export class NewBptOnlIa {
  @Column({ name: 'alamat_pm' })
  alamatPm: string;

  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_ia' })
  idOnlIa: number;

  @Column({ name: 'masa_berlaku_stra' })
  masaBerlakuStra: string;

  @Column({ name: 'nama_pm' })
  namaPm: string;

  @Column({ name: 'nama_sarana' })
  namaSarana: string;

  @Column({ name: 'nomor_sipa' })
  nomorSipa: string;

  @Column({ name: 'nomor_stra' })
  nomorStra: string;

  @Column({ name: 'sarana' })
  sarana: string;
}
