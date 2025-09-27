import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_niriuoh', schema: 'new_bpt' })
export class NewBptSkIzinNiriuoh {
  @Column({ name: 'id_izin_sk' })
  idIzinSk: number;

  @PrimaryColumn({ name: 'id_sk_izin_niriuoh' })
  idSkIzinNiriuoh: number;

  @Column({ name: 'Jenis' })
  Jenis: string;

  @Column({ name: 'kajian_teknis' })
  kajianTeknis: string;

  @Column({ name: 'Nos' })
  Nos: string;

  @Column({ name: 'Perihals' })
  Perihals: string;

  @Column({ name: 'perizinan_dimiliki' })
  perizinanDimiliki: string;

  @Column({ name: 'surat_permohonan' })
  suratPermohonan: string;

  @Column({ name: 'Tgls' })
  Tgls: string;
}
