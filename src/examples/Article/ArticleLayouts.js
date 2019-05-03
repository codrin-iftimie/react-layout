import React from "react";
import styled from "styled-components";

import { Slot, createLayout, Fill } from "../../Layout";

export const Header = styled.div`
  text-align: center;
  min-height: 200px;
  padding: 1px;
`;

export const Body = styled.div`
  line-height: 28px;
  font-size: 16px;
  max-width: 660px;
  margin: 0 auto;
  font-family: "Arial";
`;

export const Wrap = styled.div`
  min-height: 100%;
  margin-bottom: ${props => (props.height ? `-${props.height}px` : "auto")};
  background-color: gray;
  box-sizing: border-box;
  border: 10px solid #ddd;
  position: relative;
`;

export const Footer = styled.div`
  height: ${props => (props.height ? `${props.height}px` : "auto")};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Push = styled.div`
  height: ${props => (props.height ? `${props.height}px` : "auto")};
`;

const GenericLayout = createLayout(({ footerHeight }) => (
  <>
    <Wrap height={footerHeight}>
      <Slot name="header">
        <Header>
          <Slot name="header.content" />
        </Header>
      </Slot>
      <Slot name="body">
        <Body>
          <Slot name="body.content" />
        </Body>
        <Push height={footerHeight} />
      </Slot>
    </Wrap>
    <Slot name="footer">
      <Footer height={footerHeight}>
        <Slot name="footer.content" />
      </Footer>
    </Slot>
  </>
));

const ArticleLayout = createLayout(function() {
  return (
    <GenericLayout footerHeight={50}>
      <Fill name="header.content">
        <Slot name="article.header">
          <Slot name="title" />
        </Slot>
      </Fill>
      <Fill name="body.content">
        <Slot name="content.wrap">
          <Slot name="content" />
        </Slot>
      </Fill>
      <Fill name="footer.content">
        <Slot name="copyright">
          Copyright 2019
        </Slot>
      </Fill>
    </GenericLayout>
  );
});

export default ArticleLayout;

const ContentWrap = styled.div`
  display: flex;

  & > :nth-child(2) {
    min-width: 30%;
    background-color: red;

    &:empty {
      min-width: auto;
    }
  }
`;

export const ArticleAlternativeLayout = createLayout(() => (
  <ArticleLayout>
    <Fill name="article.header">
      <Slot name="title" /> <br />
      <Slot name="author" />
    </Fill>
    <Fill name="content.wrap">
      <ContentWrap>
        <Slot name="content" />
        <Slot name="actions" />
      </ContentWrap>
    </Fill>
  </ArticleLayout>
))
