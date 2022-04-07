import { Wrapper } from "@components/content";
import { TextComponent } from "@components/typograph";
import { ExpandLess, ExpandMore, StarBorder } from "@mui/icons-material";
import {
  Avatar,
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useState } from "react";

export const CardSelectedRealEstateDeveloper: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      about="container"
      component="nav"
      sx={{
        py: "0px",
        px: "0px",
        backgroundColor: "grey.50",
        borderRadius: "6px",
        width: "100%",
        maxWidth: "277px",
        position: "relative",
      }}
    >
      <ListItemButton onClick={handleClick}>
        <Wrapper
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Wrapper
            about="wrapperDataAndLogoREDeveloper"
            sx={{
              display: "flex",
              alignItems: "center",
              marginRight: "14px",
            }}
          >
            <Wrapper
              about="wrapperLogoREDeveloper"
              sx={{
                height: "40px",
                width: "40px",
                backgroundColor: "grey.200",
                borderRadius: "100%",
              }}
            >
              <Avatar
                alt="logo real estate developer"
                src="https://dwvimages.sfo2.cdn.digitaloceanspaces.com/1613594013172_f1c4e362-a477-4f59-84b1-0c70ccde7813.png"
              />
            </Wrapper>

            <Wrapper
              about="wrapperDataREDeveloper"
              sx={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                marginLeft: "12px",
              }}
            >
              <TextComponent
                label="NOME CONSTRUTORA"
                fontWeight="bold"
                fontSize="12px"
                dark
              />
              <TextComponent label="Empreendimentos" fontSize="11px" dark />
            </Wrapper>
          </Wrapper>
          <Wrapper about="wrapperArrowOptions">
            <Wrapper
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Wrapper
                sx={{
                  width: "35px",
                  height: "35px",
                  borderRadius: "100%",
                  backgroundColor: "grey.200",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {open ? <ExpandLess /> : <ExpandMore />}
              </Wrapper>
            </Wrapper>
          </Wrapper>
        </Wrapper>
      </ListItemButton>

      <Collapse
        in={open}
        timeout="auto"
        unmountOnExit
        sx={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "grey.100",
          borderBottomRightRadius: "6px",
          borderBottomLeftRadius: "6px",
        }}
      >
        <List component="div" disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Selecionar construtora" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
};
