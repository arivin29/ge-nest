import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptOnlNislhsjbDto {
  @ApiProperty({ required: true })
  golongan: string;

  @ApiProperty({ required: true })
  idIzin: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idOnlNislhsjb: number; // PK

  @ApiProperty({ required: true })
  namaPenanggungjawab: string;
}
