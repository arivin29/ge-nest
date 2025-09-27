import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptOnlIpsdswtDto {
  @ApiProperty({ required: true })
  idIzin: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idOnlIpsdswt: number; // PK

  @ApiProperty({ required: true })
  namaSd: string;

  @ApiProperty({ required: true })
  penanggungJawab: string;
}
