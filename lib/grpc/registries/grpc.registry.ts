import { PROTO_PATHS } from '@fatal-cinema/contracts'
import { ACCOUNT_V1_PACKAGE_NAME } from '@fatal-cinema/contracts/gen/account'
import { AUTH_V1_PACKAGE_NAME } from '@fatal-cinema/contracts/gen/auth'
import { TELEGRAM_V1_PACKAGE_NAME } from '@fatal-cinema/contracts/gen/telegram'
import { USERS_V1_PACKAGE_NAME } from '@fatal-cinema/contracts/gen/users'

import type { GrpcRegistryClient } from '../interfaces'
import type { GrpcPackageKey } from '../types'

export const GRPC_CLIENTS: Record<GrpcPackageKey, GrpcRegistryClient> = {
	AUTH_CLIENT: {
		package: AUTH_V1_PACKAGE_NAME,
		protoPath: PROTO_PATHS.AUTH,
		env: 'AUTH_GRPC_URL',
	},
	ACCOUNT_CLIENT: {
		package: ACCOUNT_V1_PACKAGE_NAME,
		protoPath: PROTO_PATHS.ACCOUNT,
		env: 'ACCOUNT_GRPC_URL',
	},
	TELEGRAM_CLIENT: {
		package: TELEGRAM_V1_PACKAGE_NAME,
		protoPath: PROTO_PATHS.TELEGRAM,
		env: 'TELEGRAM_GRPC_URL',
	},
	USERS_CLIENT: {
		package: USERS_V1_PACKAGE_NAME,
		protoPath: PROTO_PATHS.USERS,
		env: 'USERS_GRPC_URL',
	},
} as const
