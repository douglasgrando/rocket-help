import { VStack } from 'native-base';

import { useRoute } from '@react-navigation/native';

import { Header } from '../components/Header';

type RouteParams = {
  orderId: string;
}
export function Details() {
  
  const route = useRoute();
  const {} = route.params as RouteParams;

  return (
    <VStack flex={1} bg="gray.700">
    <Header title="solicitações"/>
    </VStack>
  );
}