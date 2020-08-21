import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import Pagination from '@material-ui/lab/Pagination';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Hint = styled.div`
  font-size: 12px;
  line-height: 1.33;
  color: #2196f3;
`;

export const Title = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  flex: 0 0 80px;
  justify-content: space-between;
  align-items: center;
`;

export const ToolsRow = styled.div`
  display: flex;
  flex-grow: 2;
  flex: 0 0 30px;
  margin: 24px 0px;
  justify-content: space-between;
  align-items: center;
`;

export const TableRow = styled.div`
  width: 100%;
  flex: 1;
`;

export const Filter = styled.div`
  justify-content: flex-start;
  display: flex;
  align-items: baseline;
  width: 100%;
  gap: 10px;
`;

export const StartButton = styled.div`
  margin-left: auto;
  align-self: center;
`;
export const DownloadButton = styled(Button)`
  border-radius: 10px;
  border: solid 1px #8b8b8b;
  background-color: #ffffff;
  color: #000;
`;
export const ApplyButton = styled(Button)`
  color: #fff;
  border-radius: 10px;
  border: solid 1px #5eb245;
  background-color: #5eb245;
`;

export const StyledToggleButton = styled(ToggleButton)`
  border-radius: 10px;
  border: solid 1px #8b8b8b;
  background-color: #ffffff;
  color: #000;
  margin-right: 8px;
  padding: 8px 16px;
  font-size: 14px;
  line-height: 1.71;
  color: #343435;
  white-space: nowrap;
  text-transform: none;
`;

export const StyledToggleButtonGroup = styled(ToggleButtonGroup)`
  .MuiToggleButtonGroup-groupedHorizontal:not(:last-child) {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
  .MuiToggleButtonGroup-groupedHorizontal:not(:first-child) {
    border-left: 1px solid #8b8b8b;
    margin-left: 0;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }
  .MuiToggleButton-root.Mui-selected {
    color: #fff;
    background-color: #171718;
  }
`;

export const StyledPagination = styled(Pagination)`
  .MuiPaginationItem-page.Mui-selected {
    border-radius: 10px;
    border: solid 1px #171718;
    background-color: #ffffff;
  }
`;

export const StyledClearAll = styled.span`
  cursor: pointer;
  color: #2196f3;
`;
