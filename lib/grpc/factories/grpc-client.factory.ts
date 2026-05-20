import { Injectable } from '@nestjs/common'
import { ClientGrpc, ClientProxyFactory, Transport } from '@nestjs/microservices'

import { GrpcRegistryOptions } from '../interfaces'

@Injectable()
export class GrpcClientFactory {
	private clients = new Map<string, ClientGrpc>()

	createClient(options: GrpcRegistryOptions) {
		return ClientProxyFactory.create({ transport: Transport.GRPC, options }) as ClientGrpc
	}

	register(token: string, client: ClientGrpc) {
		this.clients.set(token, client)
	}

	getClient<T extends ClientGrpc = ClientGrpc>(token: string): T {
		const client = this.clients.get(token)

		if (!client) {
			throw new Error(`Grpc client "${token}" not found`)
		}

		return client as T
	}
}
