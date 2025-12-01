import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import styles from './assets/styles/AppStyles'
import Header from './components/Header'
import appinfo from './data/Appinfo'
import ProductData from './data/ProductData'
import ProductCard from './components/ProductCard'

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Header title={appinfo.title} subtitle={appinfo.subtitle}
      schoolName={appinfo.schoolName} version={appinfo.verion}/>

      <View style={styles.content}>
        {ProductData.map((s) => (
          <ProductCard 
            key={s.id}
            emoji={s.emoji}
            name={s.name}
            class={s.class}
            age={s.age}
          />
        ))}
      </View>
    </ScrollView>
  )
}