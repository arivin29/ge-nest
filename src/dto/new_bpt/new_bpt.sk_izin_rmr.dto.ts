import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptSkIzinRmrDto {
  @ApiProperty({ required: true })
  idIzinSk: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idSkIzinRmr: number; // PK

  @ApiProperty({ required: true })
  namaPenanggungjawab: string;

  @ApiProperty({ required: true })
  namaUsaha: string;
}
