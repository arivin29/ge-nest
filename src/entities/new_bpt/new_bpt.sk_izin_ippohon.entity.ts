import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_ippohon', schema: 'new_bpt' })
export class NewBptSkIzinIppohon {
  @Column({ name: 'data_pohon' })
  dataPohon: string;

  @Column({ name: 'diameter' })
  diameter: string;

  @Column({ name: 'id_izin_sk' })
  idIzinSk: number;

  @PrimaryColumn({ name: 'id_sk_izin_ippohon' })
  idSkIzinIppohon: number;

  @Column({ name: 'jumlah_pohon' })
  jumlahPohon: string;

  @Column({ name: 'kec', nullable: true })
  kec: string;

  @Column({ name: 'lokasi' })
  lokasi: string;

  @Column({ name: 'memperhatikan' })
  memperhatikan: string;

  @Column({ name: 'nama_pohon' })
  namaPohon: string;

  @Column({ name: 'pembahasan', nullable: true })
  pembahasan: string;

  @Column({ name: 'ruas_jalan' })
  ruasJalan: string;

  @Column({ name: 'tembusan', nullable: true })
  tembusan: string;

  @Column({ name: 'tgl_bap', nullable: true })
  tglBap: string;

  @Column({ name: 'tgl_bar', nullable: true })
  tglBar: string;

  @Column({ name: 'tinggi' })
  tinggi: string;

  @Column({ name: 'tujuan_penebangan' })
  tujuanPenebangan: string;
}
