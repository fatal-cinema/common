import { GRPC_CLIENTS_LIST } from '../constants'

export type GrpcPackageKey = (typeof GRPC_CLIENTS_LIST)[number]
