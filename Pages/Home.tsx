import { Button, Text } from '@react-native-material/core'
import React from 'react'
import { StyleSheet, View } from 'react-native'

import { connect } from 'react-redux'

class Home extends React.Component
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
                <Text>UwU</Text>
                <Button 
                    onPress={()=>{this.props.navigation.navigate("Login")}}
                    title="Navigate"
                />
                
            </View>
        )
    }

    style = StyleSheet.create({})
}

const mapStateToProps = (state: any) => {
    return {user: state.user}
}

export default connect(mapStateToProps)(Home)