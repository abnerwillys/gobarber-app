import React from 'react'

import { ActivityIndicator, View } from 'react-native'
import { useAuth } from '../hooks/auth'

import AuthRoutes from './auth.routes'
import AppRoutes from './app.routes'

const Routes = () => {
  const { user, isLoading } = useAuth()

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#ff9000" />
      </View>
    )
  }

  return user ? <AppRoutes /> : <AuthRoutes />
}

export default Routes
