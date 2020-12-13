import React, { Component} from 'react';
import {StyleSheet, View, Text,TouchableOpacity,Animated,Dimensions,TouchableHighlight} from 'react-native';
import { DrawerItems} from 'react-navigation-drawer'
import {SwipeListView} from 'react-native-swipe-list-view';
import firebase from 'firebase';
import db from '../config';
import { ListItem, Icon } from 'react-native-elements'

export default class SwipableFlatlist extends Component{
    constructor(props){
        super(props)
        this.state={
          allnotification:this.props.allnotification
        }
    }
    updateMarkAsRead=(notification)=>{
        db.collection('notifications').doc(notification.doc_id).update({'notification_status':'read'})
    }

    onSwipeValueChange = swipeData => { 
        var allNotifications = this.state.allNotifications 
        const {key,value} = swipeData;
         if(value < -Dimensions.get('window').width){ 
       const newData = [...allNotifications];
        const prevIndex = allNotifications.findIndex(item => item.key === key); 
        this.updateMarkAsread(allNotifications[prevIndex]); newData.splice(prevIndex, 1);
         this.setState({allNotifications : newData
        }) 
    };
 };


   renderItem=data=>{
       <ListItem leftElement={<Icon name='book' type='font-awesome' color='black'></Icon>}
        title={data.item.book_name}
        titleStyle={{color:'black',fontWeight:'bold'}}
        subtitle={data.item.message}
        bottomDivider
       > </ListItem>
   }

   renderHiddenItem=()=>{
       <View style={styles.rowback}>
          <View style={[styles.backRightBtn,styles.backRightBtnRight]}>
              <Text style={styles.backTextWhite}></Text>
          </View>
       </View>
   }
render(){
     return(
           <View style={styles.container}>
               <SwipeListView 
               disableRightSwipe
               data={this.state.allnotification}
               renderItem={this.renderItem}
               renderHiddenItem={this.renderHiddenItem}
               rightOpenValue={-Dimensions.get('window').width}
                previewRowKey={'0'}
                previewOpenValue={-40}
                previewOpenDelay={3000}
                onSwipeValueChange={this.onSwipeValueChange}
               >
               </SwipeListView>
           </View>
     )
}
}




const styles = StyleSheet.create({
     container: { backgroundColor: 'white', flex: 1, },
      backTextWhite: { color: '#FFF', fontWeight:'bold', fontSize:15 },
       rowBack: { alignItems: 'center', backgroundColor: '#29b6f6',
        flex: 1, flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 15, },
         backRightBtn: { alignItems: 'center', bottom: 0, justifyContent: 'center', position: 'absolute',
          top: 0, width: 100, }, 
          backRightBtnRight: { backgroundColor: '#29b6f6', right: 0, }, });