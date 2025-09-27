import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'laporan_dintek', schema: 'new_bpt' })
export class NewBptLaporanDintek {
  @Column({ name: 'alamat' })
  alamat: string;

  @Column({ name: 'id_kec' })
  idKec: string;

  @Column({ name: 'id_kel' })
  idKel: string;

  @PrimaryColumn({ name: 'id_laporan_dintek' })
  idLaporanDintek: number;

  @Column({ name: 'id_user_dintek' })
  idUserDintek: number;

  @Column({ name: 'keterangan' })
  keterangan: string;

  @Column({ name: 'masa_berlaku' })
  masaBerlaku: string;

  @Column({ name: 'nama_file' })
  namaFile: string;

  @Column({ name: 'nama_laporan' })
  namaLaporan: string;

  @Column({ name: 'nama_pemohon' })
  namaPemohon: string;

  @Column({ name: 'nama_perusahaan' })
  namaPerusahaan: string;

  @Column({ name: 'nomor_dokumen' })
  nomorDokumen: string;

  @Column({ name: 'tanggal', default: () => 'CURRENT_TIMESTAMP' })
  tanggal: string;

  @Column({ name: 'tgl_terbit' })
  tglTerbit: string;
}
