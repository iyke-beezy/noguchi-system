import React from 'react'
import { Switch, Route ,useRouteMatch} from 'react-router'
import Details from './details';
import RecordCases from './RecordCases';

const CaseRoutes=() => {
 let { path, url } = useRouteMatch();
return(
    <Switch>
        <Route exact path={path}>
            <RecordCases/>
        </Route >
        <Route path={`${path}/:caseID`}>
            <Details/>
        </Route>
    </Switch>
);
   
}

export default CaseRoutes