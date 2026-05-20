import { USERS_SERVICE_NAME, UsersServiceClient } from '@fatal-cinema/contracts/gen/users'
import { Injectable } from '@nestjs/common'
import { type ClientGrpc } from '@nestjs/microservices'

import { InjectGrpcClient } from '../decorators'
import { AbstractGrpcClient } from './abstract-grpc.client'

@Injectable()
export class UsersGrpcClient extends AbstractGrpcClient<UsersServiceClient> {
	constructor(@InjectGrpcClient('USERS_CLIENT') client: ClientGrpc) {
		super(client, USERS_SERVICE_NAME)
	}
}
