import { Switch, Route } from 'react-router-dom'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'

const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={SignUp}></Route>
            <Route path="/signin" exact component={SignIn}></Route>
            <Route path="/forgot_password" exact component={SignIn}></Route>
        </Switch>
    )
}

export default Routes