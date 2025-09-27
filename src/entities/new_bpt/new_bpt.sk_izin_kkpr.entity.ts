import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_kkpr', schema: 'new_bpt' })
export class NewBptSkIzinKkpr {
  @Column({ name: 'gs_jalan', nullable: true })
  gsJalan: string;

  @Column({ name: 'gs_pagar', nullable: true })
  gsPagar: string;

  @Column({ name: 'gs_saluran', nullable: true })
  gsSaluran: string;

  @Column({ name: 'id_izin_sk' })
  idIzinSk: number;

  @PrimaryColumn({ name: 'id_sk_izin_kkpr' })
  idSkIzinKkpr: number;

  @Column({ name: 'identitas', nullable: true })
  identitas: string;

  @Column({ name: 'input_desa', nullable: true })
  inputDesa: string;

  @Column({ name: 'isian_no15' })
  isianNo15: string;

  @Column({ name: 'isian_no8', nullable: true })
  isianNo8: string;

  @Column({ name: 'jml_serti', nullable: true })
  jmlSerti: string;

  @Column({ name: 'jumlah_bangunan' })
  jumlahBangunan: string;

  @Column({ name: 'jumlah_lantai' })
  jumlahLantai: string;

  @Column({ name: 'ketentuan_no3', nullable: true })
  ketentuanNo3: string;

  @Column({ name: 'koef_dasar', nullable: true })
  koefDasar: string;

  @Column({ name: 'koef_hijau', nullable: true })
  koefHijau: string;

  @Column({ name: 'koef_lantai', nullable: true })
  koefLantai: string;

  @Column({ name: 'koordinat' })
  koordinat: string;

  @Column({ name: 'koordinat_setuju' })
  koordinatSetuju: string;

  @Column({ name: 'lokasi' })
  lokasi: string;

  @Column({ name: 'luas_tanah' })
  luasTanah: string;

  @Column({ name: 'luas_tanah_setuju' })
  luasTanahSetuju: string;

  @Column({ name: 'nama_keg', nullable: true })
  namaKeg: string;

  @Column({ name: 'nama_pemilik_tanah' })
  namaPemilikTanah: string;

  @Column({ name: 'nama_permohonan', nullable: true })
  namaPermohonan: string;

  @Column({ name: 'no_alashak', nullable: true })
  noAlashak: string;

  @Column({ name: 'pernyataan' })
  pernyataan: string;

  @Column({ name: 'plus_dashuk', nullable: true })
  plusDashuk: string;

  @Column({ name: 'plus_dinas', nullable: true })
  plusDinas: string;

  @Column({ name: 'rencana_luas' })
  rencanaLuas: string;

  @Column({ name: 'rencana_penggunaan' })
  rencanaPenggunaan: string;

  @Column({ name: 'rencana_tapak', nullable: true })
  rencanaTapak: string;

  @Column({ name: 'rencana_teknis' })
  rencanaTeknis: string;

  @Column({ name: 'rencana_tinggi' })
  rencanaTinggi: string;

  @Column({ name: 'status_tanah' })
  statusTanah: string;

  @Column({ name: 'status_tanah1' })
  statusTanah1: string;

  @Column({ name: 'status_tanah2' })
  statusTanah2: string;

  @Column({ name: 'tgl_bap', nullable: true })
  tglBap: string;
}
