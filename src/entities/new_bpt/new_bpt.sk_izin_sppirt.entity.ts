import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_sppirt', schema: 'new_bpt' })
export class NewBptSkIzinSppirt {
  @Column({ name: 'id_izin_sk' })
  idIzinSk: number;

  @PrimaryColumn({ name: 'id_sk_izin_sppirt' })
  idSkIzinSppirt: number;

  @Column({ name: 'jenis_pangan' })
  jenisPangan: string;

  @Column({ name: 'kbli' })
  kbli: string;

  @Column({ name: 'kemasanprimer' })
  kemasanprimer: string;

  @Column({ name: 'nama_irt' })
  namaIrt: string;

  @Column({ name: 'nama_kbli' })
  namaKbli: string;

  @Column({ name: 'nama_pkp' })
  namaPkp: string;

  @Column({ name: 'nib' })
  nib: string;

  @Column({ name: 'no_penyuluhpangan' })
  noPenyuluhpangan: string;

  @Column({ name: 'no_pirt' })
  noPirt: string;

  @Column({ name: 'nodinkes' })
  nodinkes: string;

  @Column({ name: 'tgl' })
  tgl: string;

  @Column({ name: 'tgl_dinkes' })
  tglDinkes: string;

  @Column({ name: 'tgl_pertek' })
  tglPertek: string;
}
