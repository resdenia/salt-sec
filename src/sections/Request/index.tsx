import React, { FunctionComponent } from 'react';
import { useAppSelector } from 'src/hooks/redux';
import Table from 'src/components/Table';
import ProjectRows from 'src/sections/ProjectRows';
import ProjectTableHeader from 'src/sections/ProjectTableHeader';
import Filter from 'src/sections/Filter';
import { IFilteredResults } from 'src/interfaces/swagger.interface';

const Request: FunctionComponent = () => {
  const { request = {}, filteredResults } = useAppSelector((state) => state.swaggerSlice);

  if (!request) return null;
  return (
    <>
      <Filter searchRelated={'request' as keyof IFilteredResults} />
      <Table.TableWrapper columnWidths={['206px', '200px', '120px', '155px', '400px']}>
        <ProjectTableHeader />
        <Table.TableBody>
          {filteredResults ? (
            <ProjectRows
              rowData={
                filteredResults['request'] && Object.keys(filteredResults['request']).length > 0
                  ? filteredResults['request']
                  : request
              }
            />
          ) : (
            <ProjectRows rowData={request} />
          )}
        </Table.TableBody>
      </Table.TableWrapper>
    </>
  );
};

export default Request;
