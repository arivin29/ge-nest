import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'store_destroy', schema: 'erp_amims' })
export class AmimsStoreDestroy {
  @PrimaryColumn({ name: 'id_store_destroy' })
  idStoreDestroy: string;

  @Column({ name: 'id_part', nullable: true })
  idPart: string;

  @Column({ name: 'ref_rti', nullable: true })
  refRti: string;

  @Column({ name: 'date_destroy', nullable: true })
  dateDestroy: string;

  @Column({ name: 'note_destroy', nullable: true })
  noteDestroy: string;

  @Column({ name: 'id_user', nullable: true })
  idUser: string;

  @Column({ name: 'id_site', nullable: true })
  idSite: string;

  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;

  @Column({ name: 'number_destroy', nullable: true })
  numberDestroy: string;
}
