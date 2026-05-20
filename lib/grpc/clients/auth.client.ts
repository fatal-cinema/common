import { AUTH_SERVICE_NAME, type AuthServiceClient } from '@fatal-cinema/contracts/gen/auth'
import { Injectable } from '@nestjs/common'
import { type ClientGrpc } from '@nestjs/microservices'

import { InjectGrpcClient } from '../decorators'
import { AbstractGrpcClient } from './abstract-grpc.client'

@Injectable()
export class AuthGrpcClient extends AbstractGrpcClient<AuthServiceClient> {
	constructor(@InjectGrpcClient('AUTH_CLIENT') client: ClientGrpc) {
		super(client, AUTH_SERVICE_NAME)
	}
}
