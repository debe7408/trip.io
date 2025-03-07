import styled from "styled-components";
import { Grid, Typography } from "@mui/material";
import SaveIcon from "@mui/icons-material/FavoriteBorder";
import SaveIconFilled from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/IosShare";
import DeleteIcon from "@mui/icons-material/DeleteOutline";
import ReportIcon from "@mui/icons-material/ReportGmailerrorred";
import { PropertyWithOwner } from "../../../types/property";

interface Props {
  property: PropertyWithOwner;
  editor: boolean;
  bookmarked: boolean;
  handleDelete: () => void;
  handleCopy: () => void;
  handleBookmark: () => void;
  handleUnsave: () => void;
  handleReport: () => void;
}

const Header: React.FC<Props> = ({
  property,
  editor,
  bookmarked,
  handleDelete,
  handleCopy,
  handleBookmark,
  handleUnsave,
  handleReport,
}) => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Title variant="h4">{property.name}</Title>
      </Grid>
      <Grid item xs={12}>
        <Grid container>
          <Grid item xs={12} md={6}>
            <SubtitleBox>
              <Subtitle>2 Reviews</Subtitle>
              <Subtitle>{`${property.city}, ${property.country}`}</Subtitle>
            </SubtitleBox>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              alignItems: "flex-end",
            }}
          >
            <SubtitleBox>
              {editor && (
                <IconBox color="red" onClick={handleDelete}>
                  <DeleteIcon />
                  <Subtitle>Delete</Subtitle>
                </IconBox>
              )}
              {bookmarked ? (
                <IconBox onClick={handleUnsave}>
                  <SaveIconFilled />
                  <Subtitle>Unsave</Subtitle>
                </IconBox>
              ) : (
                <IconBox onClick={handleBookmark}>
                  <SaveIcon />
                  <Subtitle>Save</Subtitle>
                </IconBox>
              )}
              <IconBox onClick={handleCopy}>
                <ShareIcon />
                <Subtitle>Share</Subtitle>
              </IconBox>
              <IconBox onClick={handleReport}>
                <ReportIcon />
                <Subtitle>Report</Subtitle>
              </IconBox>
            </SubtitleBox>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Header;

const Title = styled(Typography)`
  font-weight: bold;
`;

const Subtitle = styled.div`
  font-weight: bold;
  text-decoration: underline;
  font-size: 13px;
`;

const SubtitleBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 10px;
`;

const IconBox = styled.div<{ color?: string }>`
  display: flex;
  flex-direction: row;
  color: ${({ color }) => color && color};
  align-items: center;
  justify-content: flex-start;
  gap: 5px;
  cursor: pointer;
`;
