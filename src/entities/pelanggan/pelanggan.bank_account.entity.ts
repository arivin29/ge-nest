import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'bank_account', schema: 'erp_pelanggan' })
export class PelangganBankAccount {
  @Column({ name: 'account_name' })
  accountName: string;

  @Column({ name: 'account_number' })
  accountNumber: string;

  @Column({ name: 'bank_code', nullable: true })
  bankCode: string;

  @Column({ name: 'bank_name' })
  bankName: string;

  @Column({ name: 'branch_name', nullable: true })
  branchName: string;

  @Column({ name: 'catatan', nullable: true })
  catatan: string;

  @Column({ name: 'coa_in' })
  coaIn: string;

  @Column({ name: 'coa_out' })
  coaOut: string;

  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'created_by', nullable: true })
  createdBy: string;

  @Column({ name: 'currency', nullable: true })
  currency: string;

  @PrimaryColumn({ name: 'id_bank_account' })
  idBankAccount: string;

  @Column({ name: 'status', nullable: true })
  status: string;

  @Column({ name: 'swift_code', nullable: true })
  swiftCode: string;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;

  @Column({ name: 'updated_by', nullable: true })
  updatedBy: string;
}
