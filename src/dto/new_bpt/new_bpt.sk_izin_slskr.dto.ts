import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptSkIzinSlskrDto {
  @ApiProperty({ required: true })
  idIzinSk: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idSkIzinSlskr: number; // PK

  @ApiProperty({ required: true })
  namaPenanggungjawab: string;

  @ApiProperty({ required: true })
  namaUsaha: string;
}
