import { Inject } from '@nestjs/common'

import { GRPC_CLIENT_PREFIX } from '../constants'
import { GrpcPackageKey } from '../types'

export const InjectGrpcClient = (name: GrpcPackageKey) => Inject(`${GRPC_CLIENT_PREFIX}_${name}`)
