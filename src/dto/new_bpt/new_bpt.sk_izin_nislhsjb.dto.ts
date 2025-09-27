import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptSkIzinNislhsjbDto {
  @ApiProperty({ required: true })
  golongan: string;

  @ApiProperty({ required: true })
  idIzinSk: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idSkIzinNislhsjb: number; // PK

  @ApiProperty({ required: true })
  namaPenanggungjawab: string;

  @ApiProperty({ required: true })
  perubahan2: string;

  @ApiProperty({ required: true })
  perubahanj: string;
}
