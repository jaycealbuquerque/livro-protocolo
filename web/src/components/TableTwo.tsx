import ProductOne from '../images/product/product-01.png';
import ProductTwo from '../images/product/product-02.png';
import ProductThree from '../images/product/product-03.png';
import ProductFour from '../images/product/product-04.png';

const TableTwo = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="py-6 px-4 md:px-6 xl:px-7.5">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          LIVRO PROTOCOLO NT-001
        </h4>
      </div>
      <table>
        <thead>
          <tr>
            <div className="grid grid-cols-8 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-8 2xl:px-7.5">
              <th>
                <div className="col-span-1 flex items-center">
                  <p className="font-medium">Numero protocolo</p>
                </div>
              </th>
              <th>
                <div className="col-span-1 flex items-center">
                  <p className="font-medium">Nome do interessado</p>
                </div>
              </th>
              <th>

                <div className="col-span-1 flex items-center">
                  <p className="font-medium">CPF / CNPJ</p>
                </div>
              </th>
              <th>

                <div className="col-span-1 flex items-center">
                  <p className="font-medium">Data do protocolo</p>
                </div>
              </th>
              <th>

                <div className="col-span-1 flex items-center">
                  <p className="font-medium">Ato a ser praticado</p>
                </div>
              </th>
              <th>

                <div className="col-span-1 flex items-center">
                  <p className="font-medium">Ato lavrado</p>
                </div>
              </th>
              <th>

                <div className="col-span-1 flex items-center">
                  <p className="font-medium">Livro</p>
                </div>
              </th>
              <th>

                <div className="col-span-1 flex items-center">
                  <p className="font-medium">Folha</p>
                </div>
              </th>
            </div>
          </tr>
        </thead>
        <tbody>
          <tr>

            <div className="grid grid-cols-8 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-8 2xl:px-7.5">

              <td>

                <div className="col-span-1 flex items-center">
                  <p className="text-sm text-black dark:text-white">0001NT/2023</p>
                </div>
              </td>
              <td>

                <div className="col-span-1 flex items-center">
                  <p className="text-sm text-black dark:text-white">Jeyce Albuquerque da rocha</p>
                </div>
              </td>
              <td>

                <div className="col-span-2 hidden items-center sm:flex">
                  <p className="text-sm text-black dark:text-white">040.297.973-77</p>
                </div>
              </td>
              <td>

                <div className="col-span-1 flex items-center">
                  <p className="text-sm text-black dark:text-white">11-07-2023</p>
                </div>
              </td>
              <td>

                <div className="col-span-1 flex items-center">
                  <p className="text-sm text-black dark:text-white">Procuração</p>
                </div>
              </td>

              <td>
                <div className="col-span-1 flex items-center">
                  <p className="text-sm text-black dark:text-white">Procuração</p>
                </div>
              </td>

              <td>
                <div className="col-span-1 flex items-center">
                  <p className="text-sm text-black dark:text-white">105</p>
                </div>
              </td>

              <td>
                <div className="col-span-1 flex items-center">
                  <p className="text-sm text-black dark:text-white">075/076</p>
                </div>
              </td>
            </div>
          </tr>









          {/* <div className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
          </div> */}

        </tbody>
      </table>
    </div>
  );
};

export default TableTwo;
