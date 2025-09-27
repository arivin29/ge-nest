import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_nippbt', schema: 'new_bpt' })
export class NewBptSkIzinNippbt {
  @Column({ name: 'alamat_surat' })
  alamatSurat: string;

  @Column({ name: 'id_izin_sk' })
  idIzinSk: number;

  @PrimaryColumn({ name: 'id_sk_izin_nippbt' })
  idSkIzinNippbt: number;

  @Column({ name: 'jenis_ternak' })
  jenisTernak: string;

  @Column({ name: 'jmlh_campuran' })
  jmlhCampuran: string;

  @Column({ name: 'jmlh_dewasa' })
  jmlhDewasa: string;

  @Column({ name: 'jmlh_modal' })
  jmlhModal: string;

  @Column({ name: 'jmlh_straint' })
  jmlhStraint: string;

  @Column({ name: 'jumlah' })
  jumlah: string;

  @Column({ name: 'kapasitas' })
  kapasitas: string;

  @Column({ name: 'kegiatan' })
  kegiatan: string;

  @Column({ name: 'luas_lahan' })
  luasLahan: string;

  @Column({ name: 'macam_produksi' })
  macamProduksi: string;

  @Column({ name: 'modal_pinjaman' })
  modalPinjaman: string;

  @Column({ name: 'modal_sendiri' })
  modalSendiri: string;

  @Column({ name: 'perihal' })
  perihal: string;

  @Column({ name: 'produksi_thn' })
  produksiThn: string;

  @Column({ name: 'tgl_surat' })
  tglSurat: string;
}
