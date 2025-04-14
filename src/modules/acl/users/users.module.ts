import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { AclUsers } from 'src/entities/acl';

@Module({
    imports: [TypeOrmModule.forFeature([AclUsers], 'acl')],
    exports: [TypeOrmModule.forFeature([AclUsers], 'acl')],
    controllers: [UsersController],
    providers: [UsersService],
})
export class UsersModule { }
