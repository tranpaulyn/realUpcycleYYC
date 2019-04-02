import React, {Component} from 'react';
import axios from 'axios'
import "antd/dist/antd.css";
import {Collapse} from 'antd';

<div className='container'>
          <h1>Collapseable Things</h1>
          <Collapse defaultActiveKey={['1']} onChange={callback}>
            <Panel header="Recycle" key='1' extra={genExtra()}>
              <div>{text}</div>
            </Panel>
            <Panel header="Compost" key='2' extra={genExtra()}>
              <div>{text}</div>
            </Panel>
            <Panel header="Garbage" key='3' extra={genExtra()}>
              <div>{text}</div>
            </Panel>
          </Collapse>
        </div>