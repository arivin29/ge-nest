import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_imbg', schema: 'new_bpt' })
export class NewBptSkIzinImbg {
  @Column({ name: 'atas_nama' })
  atasNama: string;

  @Column({ name: 'bertindak' })
  bertindak: string;

  @Column({ name: 'dp' })
  dp: string;

  @Column({ name: 'fungsi_bangunan' })
  fungsiBangunan: string;

  @Column({ name: 'gambar' })
  gambar: string;

  @Column({ name: 'id_izin_sk' })
  idIzinSk: number;

  @PrimaryColumn({ name: 'id_sk_izin_imbg' })
  idSkIzinImbg: number;

  @Column({ name: 'imb_global' })
  imbGlobal: string;

  @Column({ name: 'jenis_imb' })
  jenisImb: string;

  @Column({ name: 'jk' })
  jk: number;

  @Column({ name: 'jumlah' })
  jumlah: number;

  @Column({ name: 'kondisi_fisik' })
  kondisiFisik: string;

  @Column({ name: 'luas_bg' })
  luasBg: string;

  @Column({ name: 'luas_pb' })
  luasPb: string;

  @Column({ name: 'luas_tanah' })
  luasTanah: string;

  @Column({ name: 'no_dlh' })
  noDlh: string;

  @Column({ name: 'no_sk_lama' })
  noSkLama: string;

  @Column({ name: 'pembangunan' })
  pembangunan: string;

  @Column({ name: 'rab' })
  rab: number;

  @Column({ name: 'status_tanah' })
  statusTanah: string;

  @Column({ name: 'tanggal_global' })
  tanggalGlobal: string;

  @Column({ name: 'tdl_dlh' })
  tdlDlh: string;

  @Column({ name: 'tgl_dp' })
  tglDp: string;

  @Column({ name: 'tgl_gambar' })
  tglGambar: string;

  @Column({ name: 'tgl_surat' })
  tglSurat: string;
}
