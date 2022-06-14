import { Button, Text } from '@react-native-material/core'
import React from 'react'
import { StyleSheet, View } from 'react-native'

import { connect } from 'react-redux'
import * as redux from 'redux'
import { connectUser } from '../redux/actions/userActions'


class Login extends React.Component
{
    state: Readonly<{}> = {

    }

    fetchData = async () => {
        
    }

    componentDidMount(){
        this.fetchData()
    }

    render(): React.ReactNode {
        
        return (
            <View>
                <Text>UwU c'est le Login</Text>
                <Button
                    title="Connect"
                    onPress={()=>{this.props.connectUser("String",  "String", "String", 1235415)}}
                />
                <Text>{this.props.user.firstName}</Text>
            </View>
        )
    }

    style = StyleSheet.create({})
}

const mapStateToProps = (state: any) => {
    return {user: state.user}
}

const ActionCreators = Object.assign(
    {},
    connectUser,
)

const mapDispatchToProps = (dispatch: any) => ({
    actions: redux.bindActionCreators(ActionCreators, dispatch),
})

export default connect(mapStateToProps, {connectUser})(Login)