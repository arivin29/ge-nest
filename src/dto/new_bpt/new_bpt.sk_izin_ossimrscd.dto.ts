import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptSkIzinOssimrscdDto {
  @ApiProperty({ required: false })
  @IsOptional()
  direktur: string;

  @ApiProperty({ required: true })
  idIzinSk: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idSkIzinOssimrscd: number; // PK

  @ApiProperty({ required: false })
  @IsOptional()
  namaRs: string;

  @ApiProperty({ required: true })
  nib: string;

  @ApiProperty({ required: false })
  @IsOptional()
  noPertek: string;

  @ApiProperty({ required: false })
  @IsOptional()
  pemilik: string;

  @ApiProperty({ required: false })
  @IsOptional()
  perihal: string;

  @ApiProperty({ required: true })
  sarana: string;

  @ApiProperty({ required: false })
  @IsOptional()
  tglPertek: string;
}
