import { UsersWidgetController } from './users_widget.controller';
import { UsersWidgetService } from './users_widget.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { AclUsers } from 'src/entities/acl';
import { UsersReportController } from './users_report.controller';

@Module({
    imports: [TypeOrmModule.forFeature([AclUsers], 'acl')],
    exports: [TypeOrmModule.forFeature([AclUsers], 'acl')],
    controllers: [UsersController, UsersReportController, UsersWidgetController],
    providers: [UsersService, UsersWidgetService],
})
export class UsersModule { }
