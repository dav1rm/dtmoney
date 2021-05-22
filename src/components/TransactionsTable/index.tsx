import { Container } from './styles';

export function TransactionsTable() {
  return (
    <Container>
     <table>
       <thead>
         <tr>
           <th>Título</th>
           <th>Valor</th>
           <th>Categoria</th>
           <th>Data</th>
         </tr>
       </thead>

       <tbody>
         <tr>
           <td>Desenvolvimento de sistema</td>
           <td className="deposit">R$ 12.000</td>
           <td>Desenvolvimento</td>
           <td>12/05/2021</td>
         </tr>
         <tr>
           <td>Aluguel</td>
           <td className="withdraw">R$ 12.000</td>
           <td>Casa</td>
           <td>01/05/2021</td>
         </tr>
       </tbody>
     </table>
    </Container>
  )
}