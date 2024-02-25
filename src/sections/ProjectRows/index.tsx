import React, { FunctionComponent, useState } from 'react';
import Table from 'src/components/Table';
import Text from 'src/components/Text';
import ArrowIcon from 'src/assets/arrow.svg?react';
import { IItemParam, ICommunication } from 'src/interfaces/swagger.interface';
import { SWAGGER_API_DICTIONARY, TABLE_NAMES, TAG_COLOR_DICTIONARY } from 'src/utils/constants';
import Tag from 'src/components/Tag';
import styled from 'styled-components';

interface IExpendList {
  [key: string]: boolean;
}

const ArrowAnimatedIcon = styled(ArrowIcon)`
  transition: transform 0.3s ease-in-out;
  transform: rotate(-90deg);
  cursor: pointer;
  > path,
  > g {
    pointer-events: none;
  }

  &.active {
    transform: rotate(0deg);
  }
`;

interface IProps {
  rowData: ICommunication;
}
type RowItem = IItemParam;

const ProjectRows: FunctionComponent<IProps> = ({ rowData = {} }) => {
  const [itemExpend, setItemExpend] = useState<IExpendList>({});
  if (!rowData) return null;

  const onClickRowHandler = (e: React.MouseEvent, _id: string) => {
    const target = e.target as Element;

    const classArray = target.classList.value.split(' ');
    const idx = classArray.findIndex((cls: string) => cls === 'active');
    if (idx > 0) {
      target.classList.remove('active');
    } else {
      target.classList.add('active');
    }
    if (itemExpend[_id]) {
      setItemExpend((prev) => {
        return { ...prev, [_id]: false };
      });
    } else {
      setItemExpend((prev) => {
        return { ...prev, [_id]: true };
      });
    }
  };

  const renderProjectTable = () => {
    if (Object.keys(rowData).length === 0) return null;
    return Object.keys(rowData).map((key: string) => {
      return (
        <div key={`${key}`}>
          <Table.TableRow>
            <Table.Cell>
              <ArrowAnimatedIcon
                onClick={(e) => {
                  onClickRowHandler(e, key);
                }}
              />
              <Text tag={'p'} fontWeight="400">
                {SWAGGER_API_DICTIONARY[key as keyof typeof SWAGGER_API_DICTIONARY]}
              </Text>
            </Table.Cell>
            <Table.Cell> </Table.Cell>
            <Table.Cell> </Table.Cell>
            <Table.Cell> </Table.Cell>
            <Table.Cell> </Table.Cell>
          </Table.TableRow>
          {rowData[key].length > 0
            ? rowData[key].map((rowItem: RowItem) => (
                <Table.TableRow
                  key={`${rowItem.type}_${key}_${rowItem.name}`}
                  classNames={itemExpend[key] ? 'sub-item active' : 'sub-item'}>
                  <Table.Cell> </Table.Cell>
                  <Table.Cell>
                    <Text tag={'p'}>{rowItem.name}</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Tag
                      color={TAG_COLOR_DICTIONARY['pll']}
                      className={`${!rowItem.pii ? 'outline' : ''}`}>
                      {TABLE_NAMES.PII}
                    </Tag>
                  </Table.Cell>
                  <Table.Cell>
                    <Tag
                      color={TAG_COLOR_DICTIONARY['masking']}
                      className={`${!rowItem.masked ? 'outline' : ''}`}>
                      {TABLE_NAMES.MASKING}
                    </Tag>
                  </Table.Cell>
                  <Table.Cell>
                    <Tag
                      color={TAG_COLOR_DICTIONARY['type']}
                      texttype={TAG_COLOR_DICTIONARY.colorType}>
                      {rowItem.type}
                    </Tag>
                  </Table.Cell>
                </Table.TableRow>
              ))
            : null}
        </div>
      );
    });
  };

  return <>{renderProjectTable()}</>;
};

export default ProjectRows;
