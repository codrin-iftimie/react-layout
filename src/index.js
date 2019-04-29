import React from 'react';
import Example from './example';
import {Fill} from './Layout';
import {render} from 'react-dom';

const app = (
  <Example>
    <Fill name="overwriteDefault">overwriteDefault</Fill>
    <Fill name="fill">fill</Fill>
    <Example>
      <Fill name="default">Inception</Fill>
      <Fill name="overwriteDefault">{null}</Fill>
    </Example>
  </Example>
)

render(app, document.getElementById('root'));
