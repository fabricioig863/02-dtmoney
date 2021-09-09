import { useEffect } from "react";
import api from "../../services";
import { Container } from "./styles";

export function TransactionsTable() {

  useEffect(() => {
    api.get('api/transactions')
    .then(response => console.log(response.data))
    .catch((err) => {
      console.error("Algo deu errado" + err)
    })
  }, [])

  return(
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="deposit"> R$12.000,00</td>
            <td>Venda</td>
            <td>13/04/2021</td>
          </tr>

          <tr>
            <td>Aluguel</td>
            <td className="withdraw">- R$12.000,00</td>
            <td>Venda</td>
            <td>13/04/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}