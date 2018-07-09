import * as React from "react"
import { EditorContent } from "../organisms/EditorContent"
import { GlobalHeader } from "../organisms/GlobalHeader"
import { Menu } from "../organisms/Menu"
import { Grid, GridArea, Root } from "../utils/LayoutUtils"

export function Editor() {
  return (
    <Root>
      {/* prettier-ignore */}
      <Grid
        columns={["250px", "1fr"]}
        rows={[
          "30px",
          "1fr"
        ]}
        areas={[
          ["header", "header"],
          ["menu",   "content"]
        ]}
        width="100vw"
        height="100vh"
      >
        <GridArea
          name="header"
          height="30px"
        >
          <GlobalHeader />
        </GridArea>
        <GridArea
          name="menu"
          height="calc(100vh - 30px)"
        >
          <Menu/>
        </GridArea>
        <GridArea
          name="content"
          height="calc(100vh - 30px)"
        >
          <EditorContent/>
        </GridArea>
      </Grid>
    </Root>
  )
}
