import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'qa_rpd_dispotition', schema: 'erp_amims' })
export class AmimsQaRpdDispotition {
  @Column({ name: 'code_dispotition', nullable: true })
  codeDispotition: string;

  @Column({ name: 'color', nullable: true })
  color: string;

  @Column({ name: 'dispotition', nullable: true })
  dispotition: string;

  @PrimaryColumn({ name: 'id_qa_rpd_dispotition' })
  idQaRpdDispotition: string;

  @Column({ name: 'print_tag', nullable: true })
  printTag: string;

  @Column({ name: 'to_position', nullable: true })
  toPosition: string;
}
