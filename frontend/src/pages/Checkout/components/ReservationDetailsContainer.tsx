import styled from "styled-components";
import { colors } from "../../../constants/colors";
import Divider from "../../../components/DividerComponent";
import { Typography } from "@mui/material";
import AddressChip from "../../../components/AddressChip";
import { Reservation } from "../../../types/reservation";
import Timer from "../../../components/Timer";
import dayjs from "dayjs";
import { formatDate } from "../../../helperFunctions/dateFunctions";
import { Transaction } from "../../../types/transaction";

interface Props {
  reservationInfo: Reservation;
  transactionInfo?: Transaction;
}

const ReservationDetailsContainer: React.FC<Props> = ({
  reservationInfo,
  transactionInfo,
}) => {
  return (
    <Container>
      <Typography variant="h6">Reservation Details</Typography>
      <Row>
        <RowLabel>Reservation ID</RowLabel>
        <RowText>#{reservationInfo.id}</RowText>
      </Row>
      <Row>
        <RowLabel>Reservation Start</RowLabel>
        <RowText> {formatDate(reservationInfo.start_date)}</RowText>
      </Row>
      <Row>
        <RowLabel>Reservation End</RowLabel>
        <RowText>{formatDate(reservationInfo.end_date)}</RowText>
      </Row>

      <Timer
        primary
        deadline={dayjs(reservationInfo.booking_time)
          .add(30, "minute")
          .toDate()}
        label={reservationInfo.status.toLocaleUpperCase()}
      />
      {transactionInfo ? (
        <BottomContainer>
          <Typography variant="h6">Transaction Information</Typography>
          <Divider />
          <Row>
            View your transaction
            <AddressChip address={transactionInfo.hash} transaction />
          </Row>
          <Divider />
          <Row>
            <RowLabel>Transaction completed on</RowLabel>
            <RowText>{formatDate(transactionInfo.payment_time)}</RowText>
          </Row>
        </BottomContainer>
      ) : (
        <BottomContainer>
          <Typography variant="h6">Transaction Process</Typography>
          <Divider />
          <Row>
            <RowLabel>1. Update Contact Information</RowLabel>
          </Row>
          <Divider />
          <Row>
            2. Approve spending allowance
            <AddressChip
              address={process.env.REACT_APP_USDT_TOKEN_ADDRESS as string}
            />
          </Row>
          <Divider />
          <Row>
            <RowLabel>3. Approve payment transaction</RowLabel>
            <AddressChip
              address={process.env.REACT_APP_PAYMENT_CONTRACT_ADDRESS as string}
            />
          </Row>
        </BottomContainer>
      )}
    </Container>
  );
};

export default ReservationDetailsContainer;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  padding: 20px;
  gap: 20px;
  background-color: ${colors.pastelPurple};
  border-radius: 10px;
  color: ${colors.navyBlue};
`;

const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: ${colors.navyBlue};
`;

const RowLabel = styled.div`
  display: inherit;
  justify-content: flex-start;
  align-content: center;
  align-items: center;
`;
const RowText = styled.div`
  display: inherit;
  justify-content: flex-end;
  align-content: center;
  align-items: center;
`;
