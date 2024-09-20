import * as React from 'react';
import { Button, View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1}}> 
      <View style = {{ flex : 1, alignItems: 'center', justifyContent: 'center' }}>
           <Image 
    source={require('./img/Screen1.png')} 
    style={{ height: 350, width: 300 }} 
  />
      </View>
      <View style={{flex:1}}>
        <View style={{flex:1,justifyContent: "flex-start", left:20}}>
          <Text>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
        </View>
        <View style={{flex:1,justifyContent: "flex-start", left:20 , flexDirection:"row"}}>
          <Image 
          source={require('./img/Star.png')} 
          style={{height:20, width:20}}/>
          <Image 
          source={require('./img/Star.png')} 
          style={{height:20, width:20}}/>
          <Image 
          source={require('./img/Star.png')} 
          style={{height:20, width:20}}/>
          <Image 
          source={require('./img/Star.png')} 
          style={{height:20, width:20}}/>
          <Image 
          source={require('./img/Star.png')} 
          style={{height:20, width:20}}/>
          <Text style={{left:30}}>(Xem 828 đánh giá)</Text>
        </View>
        <View style={{flex:1,justifyContent: "flex-start", flexDirection:"row" ,left:20 }}>
          <Text style={{fontWeight :"bold"}}>1.790.000 đ</Text>
          <Text style={{textDecorationLine: 'line-through', left:30, fontWeight :"bold"}}>1.790.000 đ</Text>
        </View>
        <View style={{flex:1,justifyContent: "flex-start", left:20}}>
          <Text style={{color:"#FA0000", fontWeight :"bold"}}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
        </View>
        <View style={{flex:1 }}>
          <Button
          // color = "#C4C4C4"
          // style={{}}
          title="4 MÀU-CHỌN MÀU"
          onPress={() => navigation.navigate('Details')}
          />
        </View>
        <View style={{flex:2}}>
          <Button title="Chọn mua" color="#CA1536">
            
          </Button>
        </View>
      </View>
    </View>
    
  );
}

function DetailsScreen() {
  return (
    <View style={{flex:1}}>
      <View style={{flex:1,justifyContent : "space-evenly", flexDirection:"row"}}>
        <View >
          <Image 
          source={require('./img/Screen1.png')} 
          style={{height:100, width:100}}/>
        </View>
        <View>
          <Text>Điện Thoại Vsmart Joy 3 Hàng chính hãng</Text>
        </View>
      </View>
      
      <View style={{flex:4,justifyContent : "space-evenly", alignItems:"center", backgroundColor:"#C4C4C4"}}>
        <Text>Chọn một màu bên dưới:</Text>
        <Button 
          color = "#C5F1FB"
        />
        <Button 
          color = "#F30D0D"
        />
        <Button 
          color = "#000000"
        />
        <Button 
          color = "#234896"
        />
        <View style={{alignItems:"center"}}>
         <Button
          title="Xong"
          onPress={() => navigation.goBack()} />
      </View>
      </View>
      
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
