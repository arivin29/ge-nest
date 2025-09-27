import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_rph', schema: 'new_bpt' })
export class NewBptSkIzinRph {
  @Column({ name: 'id_izin_sk' })
  idIzinSk: number;

  @PrimaryColumn({ name: 'id_sk_izin_rph' })
  idSkIzinRph: number;

  @Column({ name: 'kapasitas' })
  kapasitas: string;

  @Column({ name: 'lokasi' })
  lokasi: string;

  @Column({ name: 'luas_bangunan' })
  luasBangunan: string;

  @Column({ name: 'luas_prasarana' })
  luasPrasarana: string;

  @Column({ name: 'luas_tanah' })
  luasTanah: string;

  @Column({ name: 'no_akta' })
  noAkta: string;

  @Column({ name: 'no_teknis' })
  noTeknis: string;

  @Column({ name: 'npwp' })
  npwp: string;

  @Column({ name: 'produksi' })
  produksi: string;

  @Column({ name: 'ternak' })
  ternak: string;

  @Column({ name: 'tgl_surat' })
  tglSurat: string;

  @Column({ name: 'tgl_teknis' })
  tglTeknis: string;

  @Column({ name: 'tk_asing' })
  tkAsing: string;

  @Column({ name: 'tk_ind' })
  tkInd: string;
}
