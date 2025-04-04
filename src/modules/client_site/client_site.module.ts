import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientSiteService } from './client_site.service';
import { ClientSiteController } from './client_site.controller';
import { ClientSite } from './entities/client_site.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ClientSite])],
  controllers: [ClientSiteController],
  providers: [ClientSiteService],
})
export class ClientSiteModule {}
