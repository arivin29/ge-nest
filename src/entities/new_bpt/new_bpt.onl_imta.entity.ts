import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_imta', schema: 'new_bpt' })
export class NewBptOnlImta {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_imta' })
  idOnlImta: number;

  @Column({ name: 'jabatan' })
  jabatan: string;

  @Column({ name: 'jenis_kelamin' })
  jenisKelamin: string;

  @Column({ name: 'jenis_usaha' })
  jenisUsaha: string;

  @Column({ name: 'kewarganegaraan' })
  kewarganegaraan: string;

  @Column({ name: 'perpanjangan_ke' })
  perpanjanganKe: string;
}
