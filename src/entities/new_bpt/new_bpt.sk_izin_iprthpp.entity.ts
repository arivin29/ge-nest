import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_iprthpp', schema: 'new_bpt' })
export class NewBptSkIzinIprthpp {
  @Column({ name: 'data_pohon' })
  dataPohon: string;

  @Column({ name: 'diameter' })
  diameter: string;

  @Column({ name: 'id_izin_sk' })
  idIzinSk: number;

  @PrimaryColumn({ name: 'id_sk_izin_iprthpp' })
  idSkIzinIprthpp: number;

  @Column({ name: 'jenis' })
  jenis: string;

  @Column({ name: 'jumlah_pohon' })
  jumlahPohon: string;

  @Column({ name: 'lokasi' })
  lokasi: string;

  @Column({ name: 'memperhatikan' })
  memperhatikan: string;

  @Column({ name: 'nama_pohon' })
  namaPohon: string;

  @Column({ name: 'ruas_jalan' })
  ruasJalan: string;

  @Column({ name: 'tinggi' })
  tinggi: string;

  @Column({ name: 'tujuan_penebangan' })
  tujuanPenebangan: string;
}
