import { Module } from '@nestjs/common';
import { AuthProxyController } from './auth_proxy.controller';
import { AuthProxyService } from './auth_proxy.service';

@Module({
  controllers: [AuthProxyController],
  providers: [AuthProxyService]
})
export class AuthProxyModule {}
