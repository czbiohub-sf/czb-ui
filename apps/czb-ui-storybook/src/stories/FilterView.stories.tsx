import type { Meta, StoryObj } from "@storybook/react";

import { FilterView as CZBUIFilterView } from "@czb-ui/core";

import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import SettingsIcon from "@mui/icons-material/Settings";
import Box from "@mui/material/Box";

const meta: Meta<typeof CZBUIFilterView> = {
  component: CZBUIFilterView,
  title: "core/FilterView",
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    muiBreakpointForMobile: {
      control: "radio",
      options: ["xs", "sm", "md", "lg", "xl"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof CZBUIFilterView>;

const DrawerComponent = (
  <>
    <List>
      {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
        <ListItem key={text} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
    <Divider />
    <List>
      {["All mail", "Trash", "Spam"].map((text, index) => (
        <ListItem key={text} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  </>
);

const ContentComponent = (
  <Box m={6} maxWidth="sm">
    <Typography variant="h1">What is the FilterView component?</Typography>
    <Typography paragraph>
      The FilterView component is a responsive layout component that displays a
      drawer on the left side of the screen on desktop devices, and a floating
      action button that opens a drawer on mobile devices.
    </Typography>
    <Typography paragraph>
      This component is most suitable for applications that require a set of
      filters along with a table of data.
    </Typography>
    <Typography paragraph>
      The name of this component will definitely be changed for the v2 release.
    </Typography>
  </Box>
);

export const FilterView: Story = {
  args: {
    desktopDrawerWidth: 240,
    muiBreakpointForMobile: "md",
    mobileFabAriaLabel: "Options",
    mobileFabIcon: <SettingsIcon />,
    drawerComponent: DrawerComponent,
    contentComponent: ContentComponent,
  },
};
