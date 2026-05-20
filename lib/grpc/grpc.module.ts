import { Module, type DynamicModule } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'

import { GRPC_CLIENT_PREFIX } from './constants'
import { GrpcClientFactory } from './factories'
import { GRPC_CLIENTS } from './registries'
import { GrpcPackageKey } from './types'

@Module({})
export class GrpcModule {
	static register(clients: Array<GrpcPackageKey>): DynamicModule {
		return {
			module: GrpcModule,
			providers: [
				GrpcClientFactory,
				...clients.map(key => {
					const config = GRPC_CLIENTS[key]

					return {
						provide: `${GRPC_CLIENT_PREFIX}_${key}`,
						useFactory: (factory: GrpcClientFactory, configService: ConfigService) => {
							const url = configService.getOrThrow<string>(config.env)

							const client = factory.createClient({
								package: config.package,
								protoPath: config.protoPath,
								url,
							})

							factory.register(key, client)

							return client
						},
						inject: [GrpcClientFactory, ConfigService],
					}
				}),
			],
			exports: [GrpcClientFactory, ...clients.map(key => `${GRPC_CLIENT_PREFIX}_${key}`)],
		}
	}
}
