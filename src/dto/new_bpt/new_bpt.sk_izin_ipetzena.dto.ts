import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptSkIzinIpetzenaDto {
  @ApiProperty({ required: true })
  idIzinSk: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idSkIzinIpetzena: number; // PK

  @ApiProperty({ required: false })
  @IsOptional()
  noRek: string;

  @ApiProperty({ required: false })
  @IsOptional()
  tglReg: string;

  @ApiProperty({ required: false })
  @IsOptional()
  tglRek: string;
}
