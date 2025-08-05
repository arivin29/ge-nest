import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'pur_po', schema: 'erp_amims' })
export class AmimsPurPo {
  @Column({ name: 'approve_director', nullable: true })
  approveDirector: number;

  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'date_acc', nullable: true })
  dateAcc: string;

  @Column({ name: 'date_acc_director', nullable: true })
  dateAccDirector: string;

  @Column({ name: 'date_deadline', nullable: true })
  dateDeadline: string;

  @Column({ name: 'date_po', nullable: true })
  datePo: string;

  @Column({ name: 'id_currency', nullable: true })
  idCurrency: string;

  @Column({ name: 'id_position', nullable: true })
  idPosition: string;

  @PrimaryColumn({ name: 'id_pur_po' })
  idPurPo: string;

  @Column({ name: 'id_pur_vendor', nullable: true })
  idPurVendor: string;

  @Column({ name: 'id_pur_vendor_contact', nullable: true })
  idPurVendorContact: string;

  @Column({ name: 'id_site', nullable: true })
  idSite: string;

  @Column({ name: 'id_user', nullable: true })
  idUser: string;

  @Column({ name: 'id_user_director', nullable: true })
  idUserDirector: string;

  @Column({ name: 'id_user_manager', nullable: true })
  idUserManager: string;

  @Column({ name: 'is_deleted', nullable: true })
  isDeleted: number;

  @Column({ name: 'mode_of_transport', nullable: true })
  modeOfTransport: string;

  @Column({ name: 'no_index', nullable: true })
  noIndex: number;

  @Column({ name: 'note_po', nullable: true })
  notePo: string;

  @Column({ name: 'number_po', nullable: true })
  numberPo: string;

  @Column({ name: 'old_po', nullable: true })
  oldPo: string;

  @Column({ name: 'price_total', nullable: true })
  priceTotal: number;

  @Column({ name: 'quotation_date', nullable: true })
  quotationDate: string;

  @Column({ name: 'quotation_number', nullable: true })
  quotationNumber: string;

  @Column({ name: 'shipping', nullable: true })
  shipping: string;

  @Column({ name: 'status_po', nullable: true })
  statusPo: string;

  @Column({ name: 'term', nullable: true })
  term: string;

  @Column({ name: 'type_po', nullable: true })
  typePo: string;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;

  @Column({ name: 'validasi', nullable: true })
  validasi: number;

  @Column({ name: 'vat', nullable: true })
  vat: number;
}
