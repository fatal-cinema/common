import { ACCOUNT_SERVICE_NAME, AccountServiceClient } from '@fatal-cinema/contracts/gen/account'
import { Injectable } from '@nestjs/common'
import { type ClientGrpc } from '@nestjs/microservices'

import { InjectGrpcClient } from '../decorators'
import { AbstractGrpcClient } from './abstract-grpc.client'

@Injectable()
export class AccountGrpcClient extends AbstractGrpcClient<AccountServiceClient> {
	constructor(@InjectGrpcClient('ACCOUNT_CLIENT') client: ClientGrpc) {
		super(client, ACCOUNT_SERVICE_NAME)
	}
}
