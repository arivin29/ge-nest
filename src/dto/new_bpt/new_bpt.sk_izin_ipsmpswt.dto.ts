import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptSkIzinIpsmpswtDto {
  @ApiProperty({ required: true })
  idIzinSk: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idSkIzinIpsmpswt: number; // PK

  @ApiProperty({ required: true })
  memperhatikan: string;

  @ApiProperty({ required: true })
  namaSmp: string;

  @ApiProperty({ required: true })
  penanggungJawab: string;
}
