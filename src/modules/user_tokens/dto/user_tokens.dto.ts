import { ApiProperty } from "@nestjs/swagger";
import { IsOptional } from "class-validator";
import { PrimaryGeneratedColumn } from "typeorm";

export class UserTokensDto {
  @ApiProperty({ required: true })
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @ApiProperty({ required: false })
  @IsOptional()
  idUser: string;
  @ApiProperty({ required: false })
  @IsOptional()
  refreshToken: string;
  @ApiProperty({ required: false })
  @IsOptional()
  userAgent: string;
  @ApiProperty({ required: false })
  @IsOptional()
  ipAddress: string;
  @ApiProperty({ required: false })
  @IsOptional()
  createdAt: Date;
}
