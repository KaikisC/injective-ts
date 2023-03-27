import { grpc } from '@injectivelabs/grpc-web'
import { NodeHttpTransport } from '@injectivelabs/grpc-web-node-http-transport'
import { ReactNativeTransport } from '@injectivelabs/grpc-web-react-native-transport'
import { isNode, isReactNative } from './helpers'

export const getGrpcTransport = (): grpc.TransportFactory | undefined => {
  if (isReactNative()) {
    return ReactNativeTransport({ withCredentials: true })
  }

  if (isNode()) {
    return NodeHttpTransport()
  }

  return undefined
}
