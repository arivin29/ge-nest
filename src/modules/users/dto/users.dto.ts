import { ApiProperty } from "@nestjs/swagger";
import { IsOptional } from "class-validator";

export class UsersDto {
  @ApiProperty({ required: true })
  
  idUsers: string;
  @ApiProperty({ required: true })
  
  email: string;
  @ApiProperty({ required: true })
  
  password: string;
  @ApiProperty({ required: false })
  @IsOptional()
  nama: string;
  @ApiProperty({ required: false })
  @IsOptional()
  status: string;
  @ApiProperty({ required: false })
  @IsOptional()
  wajibResetPassword: boolean;
  @ApiProperty({ required: false })
  @IsOptional()
  lastLogin: Date;
  @ApiProperty({ required: false })
  @IsOptional()
  createdAt: Date;
  @ApiProperty({ required: false })
  @IsOptional()
  idUserGroup: string;
}
