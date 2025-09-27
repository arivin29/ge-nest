import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_imta', schema: 'new_bpt' })
export class NewBptSkIzinImta {
  @Column({ name: 'id_izin_sk' })
  idIzinSk: number;

  @Column({ name: 'id_pemohon' })
  idPemohon: string;

  @PrimaryColumn({ name: 'id_sk_izin_imta' })
  idSkIzinImta: number;

  @Column({ name: 'jabatan' })
  jabatan: string;

  @Column({ name: 'jenis_usaha' })
  jenisUsaha: string;

  @Column({ name: 'jk' })
  jk: string;

  @Column({ name: 'kewarganegaraan' })
  kewarganegaraan: string;

  @Column({ name: 'memperhatikan' })
  memperhatikan: string;

  @Column({ name: 'nomor_permohonan' })
  nomorPermohonan: string;

  @Column({ name: 'perpanjangan_ke' })
  perpanjanganKe: string;

  @Column({ name: 'tgl_permohonan' })
  tglPermohonan: string;

  @Column({ name: 'tgl_reg' })
  tglReg: string;
}
