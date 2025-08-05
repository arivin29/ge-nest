import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'due_list_output', schema: 'erp_amims' })
export class AmimsDueListOutput {
  @Column({ name: 'at_install', nullable: true })
  atInstall: string;

  @Column({ name: 'ata', nullable: true })
  ata: string;

  @Column({ name: 'code', nullable: true })
  code: string;

  @Column({ name: 'current_part', nullable: true })
  currentPart: string;

  @Column({ name: 'due_at', nullable: true })
  dueAt: string;

  @Column({ name: 'due_c', nullable: true })
  dueC: number;

  @Column({ name: 'due_h', nullable: true })
  dueH: number;

  @Column({ name: 'due_t', nullable: true })
  dueT: number;

  @Column({ name: 'id_aircraft', nullable: true })
  idAircraft: string;

  @Column({ name: 'id_due_list', nullable: true })
  idDueList: string;

  @PrimaryColumn({ name: 'id_due_list_output' })
  idDueListOutput: string;

  @Column({ name: 'id_mpart', nullable: true })
  idMpart: string;

  @Column({ name: 'id_part', nullable: true })
  idPart: string;

  @Column({ name: 'install_part', nullable: true })
  installPart: string;

  @Column({ name: 'keyword', nullable: true })
  keyword: string;

  @Column({ name: 'note_due', nullable: true })
  noteDue: string;

  @Column({ name: 'part_number', nullable: true })
  partNumber: string;

  @Column({ name: 'peruntukan', nullable: true })
  peruntukan: string;

  @Column({ name: 'ramaining', nullable: true })
  ramaining: number;

  @Column({ name: 'sn', nullable: true })
  sn: string;

  @Column({ name: 'to_due', nullable: true })
  toDue: number;

  @Column({ name: 'type_due', nullable: true })
  typeDue: string;

  @Column({ name: 'type_ofwork', nullable: true })
  typeOfwork: string;

  @Column({ name: 'variabel', nullable: true })
  variabel: string;
}
