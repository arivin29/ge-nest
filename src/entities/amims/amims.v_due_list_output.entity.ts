import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'v_due_list_output', schema: 'erp_amims' })
export class AmimsVDueListOutput {
  @Column({ name: 'id_part', nullable: true })
  idPart: string;

  @Column({ name: 'note_due', nullable: true })
  noteDue: string;

  @Column({ name: 'id_aircraft', nullable: true })
  idAircraft: string;

  @Column({ name: 'id_mpart', nullable: true })
  idMpart: string;

  @Column({ name: 'keyword', nullable: true })
  keyword: string;

  @Column({ name: 'part_number', nullable: true })
  partNumber: string;

  @Column({ name: 'sn', nullable: true })
  sn: string;

  @Column({ name: 'ata', nullable: true })
  ata: string;

  @Column({ name: 'code', nullable: true })
  code: string;

  @Column({ name: 'at_install_hr', nullable: true })
  atInstallHr: string;

  @Column({ name: 'to_due_hr', nullable: true })
  toDueHr: number;

  @Column({ name: 'due_at_hr', nullable: true })
  dueAtHr: string;

  @Column({ name: 'remaining_hr', nullable: true })
  remainingHr: number;

  @Column({ name: 'at_install_dy', nullable: true })
  atInstallDy: string;

  @Column({ name: 'to_due_dy', nullable: true })
  toDueDy: number;

  @Column({ name: 'due_at_dy', nullable: true })
  dueAtDy: string;

  @Column({ name: 'remaining_dy', nullable: true })
  remainingDy: number;

  @Column({ name: 'at_install_cy', nullable: true })
  atInstallCy: string;

  @Column({ name: 'to_due_cy', nullable: true })
  toDueCy: number;

  @Column({ name: 'due_at_cy', nullable: true })
  dueAtCy: string;

  @Column({ name: 'remaining_cy', nullable: true })
  remainingCy: number;

  @Column({ name: 'part_price', nullable: true })
  partPrice: number;

  @Column({ name: 'last_price', nullable: true })
  lastPrice: number;

  @Column({ name: 'last_price_currency', nullable: true })
  lastPriceCurrency: string;

  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'type_due', nullable: true })
  typeDue: string;

  @Column({ name: 'type_ofwork', nullable: true })
  typeOfwork: string;

  @Column({ name: 'variabel', nullable: true })
  variabel: string;

  @Column({ name: 'peruntukan', nullable: true })
  peruntukan: string;

  @Column({ name: 'id_due_list', nullable: true })
  idDueList: string;

  @PrimaryColumn({ name: 'id_due_list_output' })
  idDueListOutput: string;
}
