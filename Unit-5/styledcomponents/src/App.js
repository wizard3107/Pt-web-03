import './App.css';
import React from 'react';
import {AppWrapper} from './app.styled'
import Button from './Components/Button';
  function App() {

  return (
    <AppWrapper>
      <Button type="primary"/>
      <Button type="default" />
      <Button type="dashed" />
      <Button type="text" />
      <Button type="link" />

    </AppWrapper>
  );
}

export default App;
