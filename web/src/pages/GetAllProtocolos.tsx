import Breadcrumb from "../components/Breadcrumb";
import Table from "../components/Table";
import DefaultLayout from "../layout/DefaultLayout";


export default function GetAllProtocolos() {
  return (

    <DefaultLayout>
      <Breadcrumb pageName='Listar Protocolos' />

      <Table />
    </DefaultLayout>
  )
}