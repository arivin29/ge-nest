import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptOnlNippbtDto {
  @ApiProperty({ required: true })
  idIzin: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idOnlNippbt: number; // PK

  @ApiProperty({ required: true })
  jenisTernak: string;

  @ApiProperty({ required: true })
  jumlah: string;
}
