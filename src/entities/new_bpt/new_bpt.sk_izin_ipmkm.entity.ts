import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_ipmkm', schema: 'new_bpt' })
export class NewBptSkIzinIpmkm {
  @Column({ name: 'bangunan_makam' })
  bangunanMakam: string;

  @Column({ name: 'blok' })
  blok: string;

  @Column({ name: 'id_izin_sk' })
  idIzinSk: number;

  @PrimaryColumn({ name: 'id_sk_izin_ipmkm' })
  idSkIzinIpmkm: number;

  @Column({ name: 'jenis' })
  jenis: string;

  @Column({ name: 'nama' })
  nama: string;

  @Column({ name: 'tgl_reg' })
  tglReg: string;
}
