import Breadcrumb from "../components/Breadcrumb";
import TableTwo from "../components/TableTwo";
import DefaultLayout from "../layout/DefaultLayout";


export default function ListarProtocolos() {
  return (

    <DefaultLayout>
      <Breadcrumb pageName='Listar Protocolos' />

      <TableTwo />
    </DefaultLayout>
  )
}