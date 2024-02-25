import React, { FunctionComponent } from 'react';
import Table from 'src/components/Table';
import Text from 'src/components/Text';
import { TABLE_NAMES } from 'src/utils/constants';

const ProjectTableHeader: FunctionComponent = () => {
  return (
    <Table.TableHeader>
      <Table.TableHeaderCell> </Table.TableHeaderCell>
      <Table.TableHeaderCell>
        <Text tag={'p'} fontWeight="600">
          {TABLE_NAMES.NAME}
        </Text>
      </Table.TableHeaderCell>
      <Table.TableHeaderCell>
        <Text tag={'p'} fontWeight="600">
          {TABLE_NAMES.PII}
        </Text>
      </Table.TableHeaderCell>
      <Table.TableHeaderCell>
        <Text tag={'p'} fontWeight="600">
          {TABLE_NAMES.MASKING}
        </Text>
      </Table.TableHeaderCell>
      <Table.TableHeaderCell>
        <Text tag={'p'} fontWeight="600">
          {TABLE_NAMES.TYPE}
        </Text>
      </Table.TableHeaderCell>
    </Table.TableHeader>
  );
};

export default ProjectTableHeader;
