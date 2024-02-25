import React, { FunctionComponent } from 'react';
import { useAppSelector } from 'src/hooks/redux';
import Table from 'src/components/Table';
import ProjectRows from 'src/sections/ProjectRows';
import ProjectTableHeader from 'src/sections/ProjectTableHeader';
import { IFilteredResults } from 'src/interfaces/swagger.interface';
import Filter from 'src/sections/Filter';

const Response: FunctionComponent = () => {
  const { response = {}, filteredResults } = useAppSelector((state) => state.swaggerSlice);
  if (!response) return null;

  return (
    <>
      <Filter searchRelated={'response' as keyof IFilteredResults} />
      <Table.TableWrapper columnWidths={['206px', '200px', '120px', '155px', '400px']}>
        <ProjectTableHeader />
        <Table.TableBody>
          {filteredResults ? (
            <ProjectRows
              rowData={
                filteredResults['response'] && Object.keys(filteredResults['response']).length > 0
                  ? filteredResults['response']
                  : response
              }
            />
          ) : (
            <ProjectRows rowData={response} />
          )}
        </Table.TableBody>
      </Table.TableWrapper>
    </>
  );
};

export default Response;
