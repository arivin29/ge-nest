import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptOnlIpkapDto {
  @ApiProperty({ required: true })
  blok: string;

  @ApiProperty({ required: true })
  idIzin: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idOnlIpkap: number; // PK

  @ApiProperty({ required: true })
  jmlKav: string;
}
