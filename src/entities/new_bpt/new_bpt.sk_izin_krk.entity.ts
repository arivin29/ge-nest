import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_krk', schema: 'new_bpt' })
export class NewBptSkIzinKrk {
  @Column({ name: 'diktum_perumahan', nullable: true })
  diktumPerumahan: string;

  @Column({ name: 'diktum_tambahan_perumahan', nullable: true })
  diktumTambahanPerumahan: string;

  @Column({ name: 'gs_jalan', nullable: true })
  gsJalan: string;

  @Column({ name: 'gs_jalan2', nullable: true })
  gsJalan2: string;

  @Column({ name: 'gs_pagar', nullable: true })
  gsPagar: string;

  @Column({ name: 'gs_pagar2', nullable: true })
  gsPagar2: string;

  @Column({ name: 'gs_saluran', nullable: true })
  gsSaluran: string;

  @Column({ name: 'gs_saluran2', nullable: true })
  gsSaluran2: string;

  @Column({ name: 'id_izin_sk' })
  idIzinSk: number;

  @PrimaryColumn({ name: 'id_sk_izin_krk' })
  idSkIzinKrk: number;

  @Column({ name: 'jml_pemohon', nullable: true })
  jmlPemohon: string;

  @Column({ name: 'jml_serti', nullable: true })
  jmlSerti: string;

  @Column({ name: 'kbli' })
  kbli: string;

  @Column({ name: 'kegiatan' })
  kegiatan: string;

  @Column({ name: 'ketentuan_no7' })
  ketentuanNo7: string;

  @Column({ name: 'koef_dasar', nullable: true })
  koefDasar: string;

  @Column({ name: 'koef_dasar2', nullable: true })
  koefDasar2: string;

  @Column({ name: 'koef_hijau', nullable: true })
  koefHijau: string;

  @Column({ name: 'koef_hijau2', nullable: true })
  koefHijau2: string;

  @Column({ name: 'koef_lantai', nullable: true })
  koefLantai: string;

  @Column({ name: 'koordinat' })
  koordinat: string;

  @Column({ name: 'koordinat_setuju' })
  koordinatSetuju: string;

  @Column({ name: 'luas_tanah_setuju' })
  luasTanahSetuju: string;

  @Column({ name: 'memperhatikan', nullable: true })
  memperhatikan: string;

  @Column({ name: 'memperhatikan1', nullable: true })
  memperhatikan1: string;

  @Column({ name: 'memperhatikan2', nullable: true })
  memperhatikan2: string;

  @Column({ name: 'memperhatikan3', nullable: true })
  memperhatikan3: string;

  @Column({ name: 'memperhatikan4', nullable: true })
  memperhatikan4: string;

  @Column({ name: 'nib' })
  nib: string;

  @Column({ name: 'no_pkkpr' })
  noPkkpr: string;

  @Column({ name: 'plus_dashuk', nullable: true })
  plusDashuk: string;

  @Column({ name: 'plus_desa', nullable: true })
  plusDesa: string;

  @Column({ name: 'plus_dinas', nullable: true })
  plusDinas: string;

  @Column({ name: 'plus_kec', nullable: true })
  plusKec: string;

  @Column({ name: 'plus_tembusan', nullable: true })
  plusTembusan: string;

  @Column({ name: 'rencana_luas' })
  rencanaLuas: string;

  @Column({ name: 'rencana_penggunaan' })
  rencanaPenggunaan: string;

  @Column({ name: 'rencana_tapak', nullable: true })
  rencanaTapak: string;

  @Column({ name: 'tambah_pemohon', nullable: true })
  tambahPemohon: string;

  @Column({ name: 'tinggi_bangunan', nullable: true })
  tinggiBangunan: string;
}
