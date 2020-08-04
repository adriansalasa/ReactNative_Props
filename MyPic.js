import React, {Component} from 'react';
import {Image, View, Text, Button} from 'react-native';

class MyPic extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isHidden: true,
        }
    }

    makeMeHide = ()=> {
    
    //console.log(this.state.isHidden);
    this.setState({isHidden: !this.state.isHidden});
    // console.log(this.state.isHidden);
    }
    render(){
        return(
            <View>
                <Text>{this.props.title}</Text>
                {/* <Image source={this.props.url} style={{width: 300, height:200}} /> */}
                {this.state.isHidden ? (
                    <Image source={this.props.url} style={{width: 300, height:200}} />
                ): null}
                
                {this.state.isHidden  ? (
                <Button title="Hide"  onPress={this.makeMeHide}/>
                ): 
                <Button title="show"  onPress={this.makeMeHide}/>
                }
             </View>
        )
    }
}

export default MyPic;