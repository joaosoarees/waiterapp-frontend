import { OrdersBoard } from '../OrdersBoard';

import { Container } from './styles';

import { orders } from '../../mocks/orders';

export function Orders() {
  return (
    <Container>
      <OrdersBoard icon="⏱️" title="Fila de espera" orders={orders} />
      <OrdersBoard icon="👨‍🍳" title="Em preparação" orders={orders} />
      <OrdersBoard icon="✅" title="Pronto!" orders={orders} />
    </Container>
  );
}
