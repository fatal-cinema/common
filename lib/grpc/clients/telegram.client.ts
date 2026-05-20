import { TELEGRAM_SERVICE_NAME, TelegramServiceClient } from '@fatal-cinema/contracts/gen/telegram'
import { Injectable } from '@nestjs/common'
import { type ClientGrpc } from '@nestjs/microservices'

import { InjectGrpcClient } from '../decorators'
import { AbstractGrpcClient } from './abstract-grpc.client'

@Injectable()
export class TelegramGrpcClient extends AbstractGrpcClient<TelegramServiceClient> {
	constructor(@InjectGrpcClient('TELEGRAM_CLIENT') client: ClientGrpc) {
		super(client, TELEGRAM_SERVICE_NAME)
	}
}
