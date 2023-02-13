import React from 'react'
import { FlatList, View,Text, ScrollView } from 'react-native'

const logo = {
  uri: 'https://reactnative.dev/img/tiny_logo.png',
  width: 64,
  height: 64,
}


const App = () => {
  const item = [
    {
       sub: 'CPP',
       id:100
    },
    {
      sub:"java",
      id:101
    },
    {
      sub:"PYTHON",
      id:102
    },

  ]
  return (       
      <FlatList
        data={item}
        renderItem={(e) => {
          return <View>                       
            <Text >{e.item.sub}</Text>
            <Text >{e.item.id}</Text>            
          </View>
                           
        }}
      />  
         
  )
}

export default App
