import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'qa_transfer_item', schema: 'erp_amims' })
export class AmimsQaTransferItem {
  @Column({ name: 'id_mpc_self_maintenance', nullable: true })
  idMpcSelfMaintenance: string;

  @Column({ name: 'id_pur_prcl', nullable: true })
  idPurPrcl: string;

  @Column({ name: 'id_qa_transfer', nullable: true })
  idQaTransfer: string;

  @PrimaryColumn({ name: 'id_qa_transfer_item' })
  idQaTransferItem: string;
}
