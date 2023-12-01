import {
  OutLetTopbarContainer,
  OutLetTopbarHeading,
  OutLetTopbarLeftContainer,
  OutLetTopbarRightContainer,
  OutLetTopbarSubHeading,
} from "../../../styles/globalcomponents/outlettopbar/styleOutletTopbar";

const OutLetTopBar = ({ heading, subheading, addDetail }) => {
  return (
    <OutLetTopbarContainer>
      <OutLetTopbarLeftContainer>
        <OutLetTopbarHeading> {heading}</OutLetTopbarHeading>
        <OutLetTopbarSubHeading>{subheading}</OutLetTopbarSubHeading>
      </OutLetTopbarLeftContainer>
      <OutLetTopbarRightContainer>
        <OutLetTopbarSubHeading>{addDetail}</OutLetTopbarSubHeading>
      </OutLetTopbarRightContainer>
    </OutLetTopbarContainer>
  );
};

export default OutLetTopBar;
