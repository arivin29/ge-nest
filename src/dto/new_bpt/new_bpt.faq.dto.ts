import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptFaqDto {
  @ApiProperty({ required: true })
  answer: string;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idFaq: number; // PK

  @ApiProperty({ required: true })
  question: string;

  @ApiProperty({ required: true })
  tgl: string;
}
