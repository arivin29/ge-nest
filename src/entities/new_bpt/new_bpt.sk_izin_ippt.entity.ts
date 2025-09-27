import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_ippt', schema: 'new_bpt' })
export class NewBptSkIzinIppt {
  @Column({ name: 'alatmesin', nullable: true })
  alatmesin: number;

  @Column({ name: 'bangunan', nullable: true })
  bangunan: number;

  @Column({ name: 'diktum_kedua' })
  diktumKedua: string;

  @Column({ name: 'id_izin_sk' })
  idIzinSk: number;

  @PrimaryColumn({ name: 'id_sk_izin_ippt' })
  idSkIzinIppt: number;

  @Column({ name: 'jenis_dokumen' })
  jenisDokumen: string;

  @Column({ name: 'jenis_kepemilikan' })
  jenisKepemilikan: string;

  @Column({ name: 'jumlah_bangunan' })
  jumlahBangunan: string;

  @Column({ name: 'jumlah_lantai' })
  jumlahLantai: string;

  @Column({ name: 'kondisi_fisik' })
  kondisiFisik: string;

  @Column({ name: 'lokasi' })
  lokasi: string;

  @Column({ name: 'luas_tanah' })
  luasTanah: string;

  @Column({ name: 'memperhatikan' })
  memperhatikan: string;

  @Column({ name: 'nama_pemilik_tanah' })
  namaPemilikTanah: string;

  @Column({ name: 'nama_permohonan', nullable: true })
  namaPermohonan: string;

  @Column({ name: 'poinbperluasan' })
  poinbperluasan: string;

  @Column({ name: 'poinbperluasan2', nullable: true })
  poinbperluasan2: string;

  @Column({ name: 'posisi_tanah' })
  posisiTanah: boolean;

  @Column({ name: 'rencana_luas' })
  rencanaLuas: string;

  @Column({ name: 'rencana_penggunaan' })
  rencanaPenggunaan: string;

  @Column({ name: 'rencana_tinggi' })
  rencanaTinggi: string;

  @Column({ name: 'rumija' })
  rumija: string;

  @Column({ name: 'sklama' })
  sklama: string;

  @Column({ name: 'status_tanah' })
  statusTanah: string;

  @Column({ name: 'tanah', nullable: true })
  tanah: number;

  @Column({ name: 'tgl_register', nullable: true })
  tglRegister: string;

  @Column({ name: 'tkp', nullable: true })
  tkp: number;

  @Column({ name: 'tkw', nullable: true })
  tkw: number;
}
