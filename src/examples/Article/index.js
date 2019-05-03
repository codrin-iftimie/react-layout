import React from 'react';
import Article, {AlternativeArticle} from './Article';
import ArticleMainLayout, {ArticleAlternativeLayout} from './ArticleLayouts';
import './base.css';

const article={
  title: "Layouts are awesome",
  author: "Codrin Iftimie",
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
}

export default () => (
  <>
    <ArticleMainLayout>
      <Article data={article}/>
    </ArticleMainLayout>
    <ArticleMainLayout>
      <AlternativeArticle data={article}/>
    </ArticleMainLayout>
    <ArticleAlternativeLayout>
      <Article data={article}/>
    </ArticleAlternativeLayout>
    <ArticleAlternativeLayout>
      <AlternativeArticle data={article}/>
    </ArticleAlternativeLayout>
  </>
)
