import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import DisplayAll from './components/DisplayAll/DisplayAll';
import InputForm from './components/InputForm/InputForm';
import Edit from './components/Edit/Edit';
import DeleteData from './components/DeleteData/DeleteData';

const App = () => (
    <Router>
        <Route path='/' exact component={DisplayAll} />
        <Route path='/new' component={InputForm} />
        <Route path='/edit/:id' render={(props) => <Edit id={props.match.params.id} />} />
        <Route path='/delete/:id' render={(props) => <DeleteData id={props.match.params.id} />} />
    </Router>
);

export default App;
